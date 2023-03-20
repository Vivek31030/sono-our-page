import {
    u as Dt
} from "./composables.b8b929aa.js";
import {
    d as O,
    u as ae,
    w as We,
    v as qe,
    a as i,
    e as E,
    r as L,
    f as A,
    o as Q,
    c as T,
    g as a,
    h as z,
    n as pe,
    _ as Ue,
    i as S,
    j as h,
    b as $,
    k as qt,
    l as N,
    m as R,
    p as Gt,
    q as jt,
    s as Kt,
    F as Ne,
    x as Ge,
    y as Yt,
    z as Xt,
    A as Me,
    B as Qt,
    C as Zt,
    D as Jt,
    t as Ve,
    E as Ut,
    G as en,
    H as tn,
    I as nn,
    J as an,
    K as Ae
} from "./entry.c9829b92.js";
import {
    u as de,
    s as on,
    v as ln,
    a as sn
} from "./index.6e35e14c.js";
import {
    m as Re,
    v as Mt,
    c as rn,
    s as De,
    a as Te,
    w as un,
    g as Fe,
    b as $t,
    p as cn,
    r as dn,
    d as mn,
    e as Tt,
    f as wt,
    h as pn,
    i as Ot,
    F as vn,
    j as gn
} from "./helpers.3509abab.js";
import {
    _ as zt,
    a as fn,
    b as _n
} from "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js";
import {
    u as ve
} from "./index.bb6f8f81.js";
import {
    T as me
} from "./HLConst.ac6e57fd.js";
import {
    c as yn
} from "./Attributions.b54b0d68.js";
import {
    $ as hn
} from "./index.72547cc7.js";
const En = e => Object.fromEntries(Object.entries(e).filter(([, n]) => n !== void 0)),
    ee = (e, n) => (r, o) => (Dt(() => e({ ...En(r),
        ...o.attrs
    }, o)), () => {
        var s, t;
        return n ? (t = (s = o.slots).default) == null ? void 0 : t.call(s) : null
    }),
    oe = {
        accesskey: String,
        autocapitalize: String,
        autofocus: {
            type: Boolean,
            default: void 0
        },
        class: String,
        contenteditable: {
            type: Boolean,
            default: void 0
        },
        contextmenu: String,
        dir: String,
        draggable: {
            type: Boolean,
            default: void 0
        },
        enterkeyhint: String,
        exportparts: String,
        hidden: {
            type: Boolean,
            default: void 0
        },
        id: String,
        inputmode: String,
        is: String,
        itemid: String,
        itemprop: String,
        itemref: String,
        itemscope: String,
        itemtype: String,
        lang: String,
        nonce: String,
        part: String,
        slot: String,
        spellcheck: {
            type: Boolean,
            default: void 0
        },
        style: String,
        tabindex: String,
        title: String,
        translate: String
    };
O({
    name: "NoScript",
    inheritAttrs: !1,
    props: { ...oe,
        title: String,
        body: Boolean,
        renderPriority: [String, Number]
    },
    setup: ee((e, {
        slots: n
    }) => {
        var s;
        const r = { ...e
            },
            o = (((s = n.default) == null ? void 0 : s.call(n)) || []).filter(({
                children: t
            }) => t).map(({
                children: t
            }) => t).join("");
        return o && (r.children = o), {
            noscript: [r]
        }
    })
});
O({
    name: "Link",
    inheritAttrs: !1,
    props: { ...oe,
        as: String,
        crossorigin: String,
        disabled: Boolean,
        fetchpriority: String,
        href: String,
        hreflang: String,
        imagesizes: String,
        imagesrcset: String,
        integrity: String,
        media: String,
        prefetch: {
            type: Boolean,
            default: void 0
        },
        referrerpolicy: String,
        rel: String,
        sizes: String,
        title: String,
        type: String,
        methods: String,
        target: String,
        body: Boolean,
        renderPriority: [String, Number]
    },
    setup: ee(e => ({
        link: [e]
    }))
});
O({
    name: "Base",
    inheritAttrs: !1,
    props: { ...oe,
        href: String,
        target: String
    },
    setup: ee(e => ({
        base: e
    }))
});
O({
    name: "Title",
    inheritAttrs: !1,
    setup: ee((e, {
        slots: n
    }) => {
        var o, s, t;
        return {
            title: ((t = (s = (o = n.default) == null ? void 0 : o.call(n)) == null ? void 0 : s[0]) == null ? void 0 : t.children) || null
        }
    })
});
O({
    name: "Meta",
    inheritAttrs: !1,
    props: { ...oe,
        charset: String,
        content: String,
        httpEquiv: String,
        name: String,
        body: Boolean,
        renderPriority: [String, Number]
    },
    setup: ee(e => {
        const n = { ...e
        };
        return n.httpEquiv && (n["http-equiv"] = n.httpEquiv, delete n.httpEquiv), {
            meta: [n]
        }
    })
});
const In = O({
    name: "Style",
    inheritAttrs: !1,
    props: { ...oe,
        type: String,
        media: String,
        nonce: String,
        title: String,
        scoped: {
            type: Boolean,
            default: void 0
        },
        body: Boolean,
        renderPriority: [String, Number]
    },
    setup: ee((e, {
        slots: n
    }) => {
        var s, t, v;
        const r = { ...e
            },
            o = (v = (t = (s = n.default) == null ? void 0 : s.call(n)) == null ? void 0 : t[0]) == null ? void 0 : v.children;
        return o && (r.children = o), {
            style: [r]
        }
    })
});
O({
    name: "Head",
    inheritAttrs: !1,
    setup: (e, n) => () => {
        var r, o;
        return (o = (r = n.slots).default) == null ? void 0 : o.call(r)
    }
});
O({
    name: "Html",
    inheritAttrs: !1,
    props: { ...oe,
        manifest: String,
        version: String,
        xmlns: String,
        renderPriority: [String, Number]
    },
    setup: ee(e => ({
        htmlAttrs: e
    }), !0)
});
O({
    name: "Body",
    inheritAttrs: !1,
    props: { ...oe,
        renderPriority: [String, Number]
    },
    setup: ee(e => ({
        bodyAttrs: e
    }), !0)
});
const ne = {
    VISIBILITY: "visibility",
    STICKY: "sticky",
    TEXT: "text",
    DESKTOP_FONT_SIZE: "desktopFontSize",
    MOBILE_FONT_SIZE: "mobileFontSize",
    TYPOGRAPHY: "typography",
    BG_IMAGE: "bgImage",
    ICON: "icon",
    VIDEO_PROPERTIES: "videoProperties",
    IMAGE_PROPERTIES: "imageProperties",
    DIVIDER_PROPERTIES: "dividerProperties",
    CUSTOM_CODE: "customCode",
    SUB_TEXT: "subText",
    SUB_TEXT_DESKTOP_FONT_SIZE: "subTextDesktopFontSize",
    SUB_TEXT_MOBILE_FONT_SIZE: "subTextMobileFontSize",
    ACTION: "action",
    VISIT_WEBSITE: "visitWebsite",
    HIDE_ELEMENT: "hideElements",
    SCROLL_TO_ELEMENT: "scrollToElement",
    PHONE_NUMBER: "phoneNumber",
    EMAIL_ADDRESS: "emailAddress",
    PRODUCT_ID: "productId",
    ICON_START: "iconStart",
    ICON_END: "iconEnd",
    END_DATE: "endDate",
    END_TIME: "endTime",
    TRANSLATE: "translate",
    EXPIRE_ACTION: "expireAction",
    REDIRECT_URL: "redirectUrl",
    HIDE_ELEMENTS: "hideElements",
    TIME_ZONE: "timezone",
    HOURS: "hours",
    MINUTES: "minutes",
    SECONDS: "seconds",
    REVISIT_ACTION: "revisitAction",
    EXPIRE_COOKIE: "cookieDate",
    SHOW_ELEMENTS: "showElements",
    TWO_STEP_ORDER_ACTIVE_MODE: "activeMode",
    TWO_STEP_ORDER_STEP_1: "step1",
    TWO_STEP_ORDER_STEP_2: "step2",
    TWO_STEP_ORDER_STEP_BUMP: "bump",
    FORM_ID: "formId",
    CALENDAR_ID: "calendarId",
    SURVEY_ID: "surveyId",
    ROW_WIDTH: "rowWidth",
    OVERLAY_COLOR: "overlayColor",
    LEFT: "left",
    POPUP_DISABLED: "popupDisabled",
    HIDE_POPUP: "popupHide",
    MIN_WIDTH: "minWidth",
    SHOW_POPUP_ON_MOUSEOUT: "showPopupOnMouseOut",
    ENABLE_ORDER_BUMP: "showOrderBump",
    BUMP_PRODUCT: "bumpProduct",
    STICKY_CONTACT: "stickyContact",
    STEP_PATH: "stepPath",
    SALE_ACTION: "saleAction",
    MENU_ITEMS: "menuItems",
    INCLUDE_LOGO_IN_MENU: "includeLogoInMenu",
    INCLUDE_HEADLINE_IN_MENU: "includeHeadlineInMenu",
    MENU_LAYOUT: "menuLayout",
    ALLOW_ROW_MAX_WIDTH: "allowRowMaxWidth",
    COLUMN_LAYOUT: "columnLayout",
    JUSTIFY_CONTENT_COLUMN_LAYOUT: "justifyContentColumnLayout",
    ALIGN_CONTENT_COLUMN_LAYOUT: "alignContentColumnLayout",
    FORCE_COLUMN_LAYOUT_FOR_MOBILE: "forceColumnLayoutForMobile"
};

function Bt() {
    const {
        $bus: e
    } = ae();

    function n() {
        e.$emit("open-popup", !0)
    }
    return {
        openPopup: n
    }
}
const J = {
        GO_TO_NEXT_STEP: "go-to-next-funnel-step",
        GO_TO_STEP: "go-to-funnel-step",
        GO_TO_URL: "url",
        OPEN_POPUP: "openPopup",
        HIDE_ELEMENT: "hide-element",
        SCROLL_TO_ELEMENT: "scroll-to-element",
        SELL_PRODUCT: "sell-product",
        CLICK_TO_CALL: "click-to-call",
        CLICK_TO_SMS: "click-to-sms",
        NONE: "none",
        GO_TO_MEMBERSHIP: "go-to-membership"
    },
    Qa = {
        English: {
            days: "days",
            hours: "hours",
            minutes: "minutes",
            seconds: "seconds"
        },
        French: {
            days: "jours",
            hours: "heure",
            minutes: "minute",
            seconds: "seconde"
        },
        Spanish: {
            days: "d\xEDas",
            hours: "horas",
            minutes: "minutos",
            seconds: "segundos"
        },
        German: {
            days: "tage",
            hours: "stunden",
            minutes: "minuten",
            seconds: "sekunden"
        },
        Russian: {
            days: "\u0434\u043D\u044F",
            hours: "\u0447\u0430\u0441\u0430",
            minutes: "\u043C\u0438\u043D\u0443\u0442\u044B",
            seconds: "\u0441\u0435\u043A\u0443\u043D\u0434\u044B"
        },
        Japanese: {
            days: "\u65E5",
            hours: "\u6642\u9593",
            minutes: "\u5206",
            seconds: "\u79D2"
        },
        Chinese: {
            days: "\u5929",
            hours: "\u5C0F\u65F6",
            minutes: "\u5206\u949F",
            seconds: "\u79D2"
        },
        Korean: {
            days: "\uC77C",
            hours: "\uC2DC\uAC04",
            minutes: "\uBD84",
            seconds: "\uCD08"
        },
        Arabic: {
            days: "\u0623\u064A\u0627\u0645",
            hours: "\u0633\u0627\u0639\u0627\u062A",
            minutes: "\u0627\u0644\u062F\u0642\u0627\u0626\u0642",
            seconds: "\u062B\u0648\u0627\u0646\u064A"
        },
        Dutch: {
            days: "dagen",
            hours: "uren",
            minutes: "minuten",
            seconds: "seconden"
        },
        Italian: {
            days: "giorni",
            hours: "ore",
            minutes: "minuti",
            seconds: "secondi"
        },
        Swedish: {
            days: "dagar",
            hours: "timmar",
            minutes: "minuter",
            seconds: "sekunder"
        }
    },
    bt = O({
        __name: "ImageComponent",
        props: {
            src: {
                type: String,
                default: ""
            },
            alt: {
                type: String,
                default: ""
            },
            classList: {
                type: Array,
                required: !1,
                default: () => []
            }
        },
        setup(e) {
            return (n, r) => We((i(), E(zt, {
                onClick: r[0] || (r[0] = o => n.$emit("click")),
                url: e.src,
                alt: e.alt,
                "class-list": e.classList
            }, null, 8, ["url", "alt", "class-list"])), [
                [qe, e.src]
            ])
        }
    }),
    Sn = ["href", "target"],
    Tn = {
        key: 1
    },
    wn = O({
        __name: "ImageRendererInner",
        props: {
            options: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const n = e,
                {
                    height: r,
                    width: o,
                    altText: s,
                    imageActionValue: t,
                    goToURLTarget: v
                } = n.options;
            let {
                imageSrc: l,
                imageClass: m,
                lazyload: y
            } = n.options;
            const I = L(l),
                b = L(""),
                B = A(() => !!(v != null && v.url));
            b.value = v && v.url ? v.url : "#";
            const c = v && v.newTab;
            return Q(() => {
                b.value = Re(b.value), b.value = Mt(b.value), rn(I.value) && (y = !1, I.value = Re(I.value)), Array.isArray(m) && (m = m.filter(f => f))
            }), (f, p) => (i(), T("div", null, [a(B) && a(t) === a(J).GO_TO_URL ? We((i(), T("a", {
                key: 0,
                href: a(b),
                target: a(c) ? "_blank" : "_self"
            }, [z(bt, {
                alt: a(s),
                "class-list": a(m),
                height: a(r),
                src: a(I),
                width: a(o),
                loading: a(y) ? "lazy" : null
            }, null, 8, ["alt", "class-list", "height", "src", "width", "loading"])], 8, Sn)), [
                [qe, a(b)]
            ]) : (i(), T("div", Tn, [We(z(bt, {
                alt: a(s),
                "class-list": a(m),
                height: a(r),
                src: a(I),
                width: a(o),
                onClick: p[0] || (p[0] = d => f.$emit("on-click")),
                loading: a(y) ? "lazy" : null
            }, null, 8, ["alt", "class-list", "height", "src", "width", "loading"]), [
                [qe, a(I)]
            ])]))]))
        }
    }),
    On = O({
        __name: "ImageRenderer",
        props: ["element", "id", "popup", "skipCompression"],
        setup(e) {
            const n = e;
            ve();
            const {
                openPopup: r
            } = Bt(), {
                extra: o
            } = n.element, {
                width: s,
                height: t,
                url: v,
                altText: l,
                redirectAction: m,
                linkUrl: y,
                compression: I
            } = o.imageProperties.value, b = s ? s.replace("px", "") : "auto", B = t ? t.replace("px", "") : "auto", c = l || "", f = De(v), p = n.skipCompression ? !1 : I, d = A(() => [Te(n.element), ..._.value]), _ = A(() => {
                const {
                    featureImageShadow: C,
                    featureImageRadius: j,
                    featureImageBorder: ge,
                    featureImageEffects: le
                } = n.element.extra;
                return Object.values([C, j, ge, le]).map(se => se && se.value)
            }), P = A(() => {
                const {
                    imageActions: C
                } = n.element.extra;
                return C ? C.value : null
            }), G = A(() => {
                const {
                    visitWebsite: C
                } = n.element.extra;
                return C && C.value
            });
            Q(() => {
                "loading" in HTMLImageElement.prototype && n.popup && document.querySelectorAll("img.lazyload").forEach(j => {
                    j.src = j.dataset.src
                })
            });

            function H() {
                if (P.value) {
                    switch (P.value) {
                        case J.OPEN_POPUP:
                            {
                                r();
                                break
                            }
                        case J.GO_TO_URL:
                            break;
                        case J.NONE:
                            return;
                        default:
                            console.error(`Invalid action type received: ${P.value}`)
                    }
                    return
                }
                if (!y) return;
                let C = y;
                C = Mt(C), m === "normal" ? window.location = C : window.open(C)
            }
            return (C, j) => (i(), T("div", {
                style: pe({
                    cursor: a(P) !== a(J).NONE ? "pointer" : "default"
                }),
                class: "image-container"
            }, [z(wn, {
                options: {
                    imageSrc: a(f),
                    lazyload: a(p),
                    width: a(b),
                    height: a(B),
                    altText: a(c),
                    imageClass: a(d),
                    imageActionValue: a(P),
                    goToURLTarget: a(G)
                },
                onClick: H
            }, null, 8, ["options"])], 4))
        }
    });
const bn = Ue(On, [
        ["__scopeId", "data-v-39a99d6f"]
    ]),
    Pn = O({
        __name: "CBackground",
        props: {
            background: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const n = e,
                r = A(() => {
                    var t, v, l, m, y, I;
                    const o = (v = (t = n.background) == null ? void 0 : t.value) == null ? void 0 : v.url,
                        s = {
                            background: `url(${De(o)})`,
                            opacity: n.background.value.opacity || "1"
                        };
                    return ((m = (l = n.background) == null ? void 0 : l.value) == null ? void 0 : m.svgCode) && ((I = (y = n.background) == null ? void 0 : y.value) == null ? void 0 : I.svgEncode) && (s.background = n.background.value.svgEncode), s
                });
            return (o, s) => {
                var t, v, l, m, y, I, b;
                return e.background && ((t = e.background) == null ? void 0 : t.value) && (((l = (v = e.background) == null ? void 0 : v.value) == null ? void 0 : l.url) || ((y = (m = e.background) == null ? void 0 : m.value) == null ? void 0 : y.svgCode) || ((b = (I = e.background) == null ? void 0 : I.value) == null ? void 0 : b.svgEncode)) ? (i(), T("div", {
                    key: 0,
                    style: pe(a(r)),
                    class: S(["bg", e.background.value.options])
                }, null, 6)) : h("", !0)
            }
        }
    });
const Ht = Ue(Pn, [
        ["__scopeId", "data-v-1a07e071"]
    ]),
    Cn = ["innerHTML"],
    Ln = {
        key: 1
    },
    kn = O({
        __name: "TextRenderer",
        props: {
            id: {
                type: String,
                required: !0
            },
            content: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const n = e,
                r = Re(n.content.value),
                o = L(r),
                s = L();
            return Q(() => {
                !s || !s.value || (s.value.innerHTML = Re(n.content.value))
            }), (t, v) => (i(), T("div", {
                class: S([e.id, "text-output"])
            }, [e.content.value ? (i(), T("div", {
                key: 0,
                innerHTML: a(o),
                ref_key: "textRenderer",
                ref: s
            }, null, 8, Cn)) : (i(), T("p", Ln))], 2))
        }
    }),
    xn = ["id"],
    An = $("div", {
        class: "divider-element"
    }, null, -1),
    Nn = [An],
    Rn = O({
        __name: "Divider",
        props: ["element"],
        setup(e) {
            return (n, r) => (i(), T("div", {
                id: e.element.id
            }, Nn, 8, xn))
        }
    }),
    Dn = N(() => R(() =>
        import ("./Video.bf4e385d.js"), ["./Video.bf4e385d.js", "./entry.c9829b92.js", "./entry.45393610.css", "./index.bb6f8f81.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./index.6e35e14c.js", "./composables.b8b929aa.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./optimize_script.dbd9c723.js", "./HLConst.ac6e57fd.js", "./Attributions.b54b0d68.js", "./Video.7668e95b.css"],
        import.meta.url).then(e => e.default || e)),
    Un = N(() => R(() =>
        import ("./Button.40cc12bb.js"), ["./Button.40cc12bb.js", "./entry.c9829b92.js", "./entry.45393610.css", "./index.6e35e14c.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./funnel_event_helper.bd666bbb.js", "./Attributions.b54b0d68.js", "./orderform_helpers.85a2dff8.js", "./pure.45d26873.js", "./HLConst.ac6e57fd.js", "./composables.b8b929aa.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./Button.aa9020e3.css"],
        import.meta.url).then(e => e.default || e)),
    Mn = N(() => R(() =>
        import ("./Countdown.cc20e171.js"), ["./Countdown.cc20e171.js", "./Timer.vue_vue_type_script_setup_true_lang.1d9692fe.js", "./entry.c9829b92.js", "./entry.45393610.css", "./index.6e35e14c.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./HLConst.ac6e57fd.js", "./timezone.fc7dd5b7.js", "./composables.b8b929aa.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./Attributions.b54b0d68.js"],
        import.meta.url).then(e => e.default || e)),
    $n = N(() => R(() =>
        import ("./DailyTimer.b5d7ec29.js"), ["./DailyTimer.b5d7ec29.js", "./Timer.vue_vue_type_script_setup_true_lang.1d9692fe.js", "./entry.c9829b92.js", "./entry.45393610.css", "./index.6e35e14c.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./HLConst.ac6e57fd.js", "./composables.b8b929aa.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./Attributions.b54b0d68.js"],
        import.meta.url).then(e => e.default || e)),
    zn = N(() => R(() =>
        import ("./MinuteTimer.e80109b0.js"), ["./MinuteTimer.e80109b0.js", "./Timer.vue_vue_type_script_setup_true_lang.1d9692fe.js", "./entry.c9829b92.js", "./entry.45393610.css", "./index.6e35e14c.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./HLConst.ac6e57fd.js", "./composables.b8b929aa.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./Attributions.b54b0d68.js"],
        import.meta.url).then(e => e.default || e)),
    Bn = N(() => R(() =>
        import ("./CustomCodeRenderer.19694a46.js"), ["./CustomCodeRenderer.19694a46.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./entry.c9829b92.js", "./entry.45393610.css", "./HtmlPreview.ac84ef2d.css", "./CustomCodeRenderer.72cd08b9.css"],
        import.meta.url).then(e => e.default || e)),
    Hn = N(() => R(() =>
        import ("./Form.34fe6b69.js"), ["./Form.34fe6b69.js", "./entry.c9829b92.js", "./entry.45393610.css", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./HLConst.ac6e57fd.js", "./Attributions.b54b0d68.js"],
        import.meta.url).then(e => e.default || e)),
    Vn = N(() => R(() =>
        import ("./Calendar.d37d9ef7.js"), ["./Calendar.d37d9ef7.js", "./entry.c9829b92.js", "./entry.45393610.css", "./helpers.3509abab.js", "./index.6e35e14c.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./composables.b8b929aa.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./HLConst.ac6e57fd.js", "./Attributions.b54b0d68.js"],
        import.meta.url).then(e => e.default || e)),
    Fn = N(() => R(() =>
        import ("./Survey.eacc2aa4.js"), ["./Survey.eacc2aa4.js", "./surveyComponent.2407a41f.js", "./entry.c9829b92.js", "./entry.45393610.css", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./TextElement.vue_vue_type_style_index_0_lang.a8abc149.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./Countries.69e07731.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./utils.72c8fdcc.js", "./Recaptcha.vue_vue_type_script_setup_true_lang.37b6adc8.js", "./optimize_script.dbd9c723.js", "./IntlTel.3cdca848.js", "./TextElement.4da2a1d9.css", "./funnel_event_helper.bd666bbb.js", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./Attributions.b54b0d68.js", "./surveyComponent.4083c8c4.css", "./app.63a239f9.css", "./HLConst.ac6e57fd.js"],
        import.meta.url).then(e => e.default || e)),
    Wn = N(() => R(() =>
        import ("./TwoStepOrder.1a73b1a3.js"), ["./TwoStepOrder.1a73b1a3.js", "./entry.c9829b92.js", "./entry.45393610.css", "./composables.b8b929aa.js", "./helpers.3509abab.js", "./index.6e35e14c.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./IntlTel.3cdca848.js", "./optimize_script.dbd9c723.js", "./TwoStepOrder.6be7c205.css"],
        import.meta.url).then(e => e.default || e)),
    qn = N(() => R(() =>
        import ("./TwoStepOrder.024754f1.js"), ["./TwoStepOrder.024754f1.js", "./entry.c9829b92.js", "./entry.45393610.css", "./composables.b8b929aa.js", "./index.bb6f8f81.js", "./IntlTel.3cdca848.js", "./helpers.3509abab.js", "./index.6e35e14c.js", "./index.72547cc7.js", "./optimize_script.dbd9c723.js", "./TwoStepOrder.6be7c205.css"],
        import.meta.url).then(e => e.default || e)),
    Gn = N(() => R(() =>
        import ("./OneStepOrder.05109cbb.js"), ["./OneStepOrder.05109cbb.js", "./composables.b8b929aa.js", "./entry.c9829b92.js", "./entry.45393610.css", "./helpers.3509abab.js", "./index.6e35e14c.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./IntlTel.3cdca848.js", "./optimize_script.dbd9c723.js", "./Button.083788e0.js", "./Countries.69e07731.js", "./utils.72c8fdcc.js", "./MoonLoader.vue_vue_type_style_index_0_lang.fc4e1d82.js", "./MoonLoader.96f1220d.css", "./Button.3e17a623.css", "./InputText.vue_vue_type_script_setup_true_lang.f15776fe.js", "./InputSelect.vue_vue_type_script_setup_true_lang.cf3aac0b.js", "./Attributions.b54b0d68.js", "./funnel_event_helper.bd666bbb.js", "./orderform_helpers.85a2dff8.js", "./OrderBump.vue_vue_type_script_setup_true_lang.20f3007b.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./Coupon.vue_vue_type_script_setup_true_lang.1fcff7b9.js", "./currency_helper.a5a1ee28.js", "./HLConst.ac6e57fd.js", "./Coupon.e6a4f74e.css", "./pure.45d26873.js", "./OneStepOrder.4034d121.css"],
        import.meta.url).then(e => e.default || e)),
    jn = N(() => R(() =>
        import ("./NavMenu.1645bac0.js"), ["./NavMenu.1645bac0.js", "./entry.c9829b92.js", "./entry.45393610.css", "./helpers.3509abab.js", "./index.6e35e14c.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./composables.b8b929aa.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./HLConst.ac6e57fd.js", "./Attributions.b54b0d68.js"],
        import.meta.url).then(e => e.default || e)),
    Kn = N(() => R(() =>
        import ("./Map.4ed1926a.js"), ["./Map.4ed1926a.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./entry.c9829b92.js", "./entry.45393610.css", "./HtmlPreview.ac84ef2d.css", "./Map.0026257c.css"],
        import.meta.url).then(e => e.default || e)),
    Yn = N(() => R(() =>
        import ("./Svg.85a4389b.js"), ["./Svg.85a4389b.js", "./entry.c9829b92.js", "./entry.45393610.css", "./helpers.3509abab.js", "./index.6e35e14c.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./composables.b8b929aa.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./HLConst.ac6e57fd.js", "./Attributions.b54b0d68.js", "./Svg.4136c1ba.css"],
        import.meta.url).then(e => e.default || e)),
    Xn = N(() => R(() =>
        import ("./ProgressBar.0cd483e3.js"), ["./ProgressBar.0cd483e3.js", "./entry.c9829b92.js", "./entry.45393610.css", "./ProgressBar.03c4075f.css"],
        import.meta.url).then(e => e.default || e)),
    Qn = N(() => R(() =>
        import ("./ImageFeature.bc2b7ce2.js"), ["./ImageFeature.bc2b7ce2.js", "./entry.c9829b92.js", "./entry.45393610.css", "./composables.b8b929aa.js", "./index.6e35e14c.js", "./helpers.3509abab.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./HLConst.ac6e57fd.js", "./Attributions.b54b0d68.js"],
        import.meta.url).then(e => e.default || e)),
    Zn = N(() => R(() =>
        import ("./ReviewWidget.287ad1e2.js"), ["./ReviewWidget.287ad1e2.js", "./composables.b8b929aa.js", "./entry.c9829b92.js", "./entry.45393610.css", "./index.bb6f8f81.js", "./optimize_script.dbd9c723.js"],
        import.meta.url).then(e => e.default || e)),
    Jn = N(() => R(() =>
        import ("./OrderConfirmation.91007484.js"), ["./OrderConfirmation.91007484.js", "./currency_helper.a5a1ee28.js", "./helpers.3509abab.js", "./entry.c9829b92.js", "./entry.45393610.css", "./index.6e35e14c.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./OrderConfirmation.09547d14.css"],
        import.meta.url).then(e => e.default || e)),
    ea = N(() => R(() =>
        import ("./FAQ.e5d84247.js"), ["./FAQ.e5d84247.js", "./entry.c9829b92.js", "./entry.45393610.css", "./helpers.3509abab.js", "./index.6e35e14c.js", "./index.72547cc7.js", "./index.bb6f8f81.js", "./HLConst.ac6e57fd.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./FAQ.a2333f8e.css"],
        import.meta.url).then(e => e.default || e)),
    ta = N(() => R(() =>
        import ("./BlogPosts.ee71fbe3.js"), ["./BlogPosts.ee71fbe3.js", "./entry.c9829b92.js", "./entry.45393610.css", "./index.6e35e14c.js", "./index.bb6f8f81.js", "./index.72547cc7.js", "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js", "./HtmlPreview.ac84ef2d.css", "./composables.b8b929aa.js", "./helpers.3509abab.js", "./HLConst.ac6e57fd.js", "./Attributions.b54b0d68.js", "./BlogPosts.93abc577.css"],
        import.meta.url).then(e => e.default || e)),
    $e = O({
        __name: "CWrapper",
        props: {
            element: {
                type: Object,
                required: !0
            },
            elements: {
                type: Array,
                required: !0
            },
            popup: {
                type: Boolean
            }
        },
        setup(e) {
            const n = e,
                r = ve(),
                o = Te(n.element);
            let s = "";
            if (n.element.tagName === me.COLUMN) {
                const l = n.element.extra[ne.COLUMN_LAYOUT];
                let m = "vertical";
                l && l.value === "row" && (m = "horizontal");
                const {
                    options: y
                } = n.element.extra.bgImage.value;
                s = `${o} bg ${y} ${m}`
            }
            const t = A(() => r.value.version >= 4 || n.element.tagName !== me.COLUMN),
                v = A(() => {
                    var m;
                    const l = r.value.orderFormVersion || 1;
                    return ((m = n.element) == null ? void 0 : m.meta) === "two-setp-order" && l === 2
                });
            return (l, m) => {
                const y = Dn,
                    I = Un,
                    b = Mn,
                    B = $n,
                    c = zn,
                    f = fn,
                    p = Bn,
                    d = Hn,
                    _ = Vn,
                    P = Fn,
                    G = Wn,
                    H = qn,
                    C = Gn,
                    j = jn,
                    ge = Kn,
                    le = Yn,
                    se = Xn,
                    ze = Qn,
                    fe = Zn,
                    we = Jn,
                    Oe = ea,
                    be = ta;
                return i(), T("div", null, [e.element.extra.bgImage && e.element.extra.bgImage.value.url && a(t) ? (i(), E(Ht, {
                    key: 0,
                    background: e.element.extra.bgImage
                }, null, 8, ["background"])) : h("", !0), e.element.tagName === "c-section" || e.element.tagName === "c-row" || e.element.tagName === "c-column" ? (i(), E(je, {
                    key: 1,
                    elements: e.elements,
                    element: e.element,
                    class: S([a(s), "inner"]),
                    popup: e.popup
                }, null, 8, ["elements", "element", "class", "popup"])) : h("", !0), e.element.tagName === "c-paragraph" || e.element.tagName === "c-heading" || e.element.tagName === "c-sub-heading" || e.element.tagName === "c-bullet-list" ? (i(), E(kn, {
                    key: 2,
                    id: e.element.id,
                    class: S([e.element.extra.nodeId, a(o)]),
                    content: e.element.extra.text
                }, null, 8, ["id", "class", "content"])) : h("", !0), e.element.tagName === "c-video" ? (i(), E(y, {
                    key: 3,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element,
                    popup: e.popup
                }, null, 8, ["class", "element", "popup"])) : h("", !0), e.element.tagName === "c-image" ? (i(), E(bn, {
                    key: 4,
                    element: e.element,
                    class: S(e.element.extra.nodeId),
                    popup: e.popup
                }, null, 8, ["element", "class", "popup"])) : h("", !0), e.element.tagName === "c-button" ? (i(), E(I, {
                    key: 5,
                    classStyles: [e.element.extra.nodeId, a(o)],
                    element: e.element
                }, null, 8, ["classStyles", "element"])) : h("", !0), z(f, null, {
                    default: qt(() => [e.element.meta === "countdown" ? (i(), E(b, {
                        key: 0,
                        class: S([e.element.extra.nodeId, a(o)]),
                        element: e.element
                    }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "day-timer" ? (i(), E(B, {
                        key: 1,
                        class: S([e.element.extra.nodeId, a(o)]),
                        element: e.element
                    }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "minute-timer" ? (i(), E(c, {
                        key: 2,
                        class: S([e.element.extra.nodeId, a(o)]),
                        element: e.element
                    }, null, 8, ["class", "element"])) : h("", !0)]),
                    _: 1
                }), e.element.tagName === "c-custom-code" ? (i(), E(p, {
                    key: 6,
                    id: e.element.id,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element
                }, null, 8, ["id", "class", "element"])) : h("", !0), e.element.meta === "form" ? (i(), E(d, {
                    key: 7,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element,
                    "is-preview": !0
                }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "calendar" && e.element.extra.calendarId ? (i(), E(_, {
                    key: 8,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element,
                    "is-preview": !1
                }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "survey" && e.element.extra.surveyId ? (i(), E(P, {
                    key: 9,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element,
                    "is-preview": !1
                }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "divider" ? (i(), E(Rn, {
                    key: 10,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element
                }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "two-setp-order" && a(v) ? (i(), E(G, {
                    key: 11,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element
                }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "two-setp-order" && !a(v) ? (i(), E(H, {
                    key: 12,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element
                }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "one-step-order" ? (i(), E(C, {
                    key: 13,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element
                }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "nav-menu" ? (i(), E(j, {
                    key: 14,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element
                }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "map" ? (i(), E(ge, {
                    key: 15,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element
                }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "svg" ? (i(), E(le, {
                    key: 16,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element
                }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "progress-bar" ? (i(), E(se, {
                    key: 17,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element
                }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "image-feature" ? (i(), E(ze, {
                    key: 18,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element
                }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "review-widget" ? (i(), E(fe, {
                    key: 19,
                    class: S([e.element.extra.nodeId, a(o)])
                }, null, 8, ["class"])) : h("", !0), e.element.meta === "order-confirmation" ? (i(), E(we, {
                    key: 20,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element
                }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "faq" ? (i(), E(Oe, {
                    key: 21,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element
                }, null, 8, ["class", "element"])) : h("", !0), e.element.meta === "blog" ? (i(), E(be, {
                    key: 22,
                    class: S([e.element.extra.nodeId, a(o)]),
                    element: e.element
                }, null, 8, ["class", "element"])) : h("", !0)])
            }
        }
    }),
    x = O({
        __name: "CGenralComponent",
        props: ["element", "elements", "popup"],
        setup(e) {
            return (n, r) => (i(), E($e, {
                element: e.element,
                elements: e.elements,
                popup: e.popup
            }, null, 8, ["element", "elements", "popup"]))
        }
    }),
    na = O({
        __name: "CRow",
        props: ["element", "elements", "popup"],
        setup(e) {
            const r = Te(e.element);
            return (o, s) => (i(), E($e, {
                element: e.element,
                elements: e.elements,
                class: S(a(r)),
                popup: e.popup
            }, null, 8, ["element", "elements", "class", "popup"]))
        }
    }),
    aa = O({
        __name: "CColumn",
        props: ["element", "elements", "popup"],
        setup(e) {
            return (n, r) => (i(), E($e, {
                element: e.element,
                elements: e.elements,
                popup: e.popup
            }, null, 8, ["element", "elements", "popup"]))
        }
    }),
    oa = O({
        __name: "CSection",
        props: ["element", "elements", "popup"],
        setup(e) {
            const n = e,
                r = Te(n.element),
                o = L(r),
                s = L(""),
                t = L(!1);
            Q(() => {
                const l = n.element.extra.sticky && n.element.extra.sticky.value;
                if (l && l !== "noneSticky") try {
                    const m = document.getElementById(n.element.id);
                    new ResizeObserver(() => {
                        (m == null ? void 0 : m.offsetHeight) > 0 && v(l)
                    }).observe(m)
                } catch {
                    v(l)
                }
            });
            const v = l => {
                Gt(() => {
                    setTimeout(() => {
                        const y = document.getElementById(n.element.id).offsetHeight,
                            I = document.getElementById("preview-container");
                        switch (t.value = !0, l) {
                            case "stickyTop":
                                {
                                    I.style.marginTop = y + "px",
                                    s.value = `
        position: fixed;
        width:100%;
        top:0;
        z-index: 99;
        `;
                                    break
                                }
                            case "stickyBottom":
                                {
                                    I.style.marginBottom = y + "px",
                                    s.value = `
        position: fixed;
        width:100%;
        bottom:0;
        z-index: 99;
        `;
                                    break
                                }
                        }
                    }, 0)
                })
            };
            return (l, m) => (i(), E($e, {
                element: e.element,
                elements: e.elements,
                class: S([a(o), {
                    "sticky-section": a(t)
                }]),
                style: pe(a(s)),
                popup: e.popup
            }, null, 8, ["element", "elements", "class", "style", "popup"]))
        }
    });
const la = {},
    sa = e => (jt("data-v-58f738a4"), e = e(), Kt(), e),
    ia = sa(() => $("div", {
        class: "empty-component-wrapper"
    }, [$("div", {
        class: "empty-component-min-height"
    })], -1)),
    ra = [ia];

function ua(e, n) {
    return i(), T("div", null, ra)
}
const ca = Ue(la, [
        ["render", ua],
        ["__scopeId", "data-v-58f738a4"]
    ]),
    da = O({
        __name: "CRenderComponentLoop",
        props: ["element", "elements", "popup"],
        setup(e) {
            const n = e,
                r = {
                    "c-section": oa,
                    "c-heading": x,
                    "c-paragraph": x,
                    "c-button": x,
                    "c-row": na,
                    "c-column": aa,
                    "c-video": x,
                    "c-image": x,
                    "c-sub-heading": x,
                    "c-bullet-list": x,
                    "c-countdown": x,
                    "c-custom-code": x,
                    "c-form": x,
                    "c-divider": x,
                    "c-order": x,
                    "c-survey": x,
                    "c-calendar": x,
                    "c-nav-menu": x,
                    "c-map": x,
                    "c-svg": x,
                    "c-progress-bar": x,
                    "c-image-feature": x,
                    "c-review-widget": x,
                    "c-order-confirmation": x,
                    "c-faq": x,
                    "c-blog": x
                },
                o = L(n.element && n.element.child ? n.element.child.map(t => n.elements.find(v => v.id === t)) : []);

            function s(t) {
                return [t.tagName, "c-wrapper", t.meta === "divider" && "dividerContainer", t.globalSectionId || [me.HEADING, me.PARAGRAPH, me.SUB_HEADING, me.BULLETLIST].includes(t.tagName) ? null : t.id, t.extra.visibility.value.hideMobile ? "desktop-only" : "", t.extra.visibility.value.hideDesktop ? "mobile-only" : ""]
            }
            return (t, v) => (i(), T("div", null, [e.elements.length > 1 && a(o).length === 0 ? (i(), E(ca, {
                key: 0,
                class: "empty-slot"
            })) : h("", !0), (i(!0), T(Ne, null, Ge(a(o), l => (i(), T(Ne, null, [l && l.tagName !== void 0 ? (i(), E(Yt(r[l.tagName]), {
                id: l.id,
                key: l.id,
                element: l,
                elements: e.elements,
                popup: e.popup,
                class: S(s(l))
            }, null, 8, ["id", "element", "elements", "popup", "class"])) : h("", !0)], 64))), 256))]))
        }
    });
const je = Ue(da, [
        ["__scopeId", "data-v-10a911cc"]
    ]),
    ma = {
        id: "preview-container",
        class: "preview-container"
    },
    pa = O({
        __name: "Container",
        props: {
            elements: {
                type: Array
            }
        },
        setup(e) {
            const {
                $bus: n
            } = ae();

            function r(o) {
                !o || (window.location.href = `${window.location.origin}${window.location.pathname}${window.location.search}#${o}`)
            }
            return Q(() => {
                if (n.$on("scroll-to-element", r), "loading" in HTMLImageElement.prototype) document.querySelectorAll("img.lazyload").forEach(t => {
                    t.src = t.dataset.src
                });
                else {
                    const s = document.createElement("script");
                    s.async = !0, s.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js", document.body.appendChild(s)
                }
                const o = document.querySelectorAll(".open-popup");
                Array.from(o).forEach(s => {
                    s.addEventListener("click", t => {
                        n.$emit("open-popup", !0)
                    })
                })
            }), Xt(() => {
                n.$off("scroll-to-element", r)
            }), (o, s) => (i(), T("div", ma, [z(je, {
                elements: e.elements,
                element: e.elements[0],
                popup: !1
            }, null, 8, ["elements", "element"])]))
        }
    });
const Vt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAlCAQAAABrYji1AAAC20lEQVRIx5WWr2/bUBDH7+VJTUkKzCqtZAYjMQwJiSoZFIVEhcZppO0PSGALqgDTIivSuDWwSgUBbQMDWkXqyAZaqdJYeJxo1k13zz/jl9p5R+wk/uR73zu/dwBlS0RRspCjHCNAgszc7Y1LIEeHR4fQUMHXKbgyjlGMOZbWw2h5s7oPXoKX1X3w/e+3pxOGaoA6XIIS5uXgzytq1ur+7UyHLOJi2HHnfDGnR9ebKY7QwS520cERTnEZKOTTyTZwG6f8Yl300DJwsYmft6KJLiP/vb+d5YFFHMP64/UGcYqtAiqOFk5ZeQTU4jhNYXbO6b/9nag4fAb+/pICszgBgjwDm+yflcIopuzh0WGccB4nwai3+2PyrFUJ18TXEDFNOMWxNmEKh7S5lWAULiIGL7G+LC7R9lxwyN9xR/GMqb4Mjnyr9X78QvRyP1dLIbzoLvs9fba8YX15nLSA3wKnkA4tL4HlrXDSdBMcZd6ot2FILdLS+JMut9CB1C7QoHRTHDsHQ2rfptZwPSy2A4wCDuyD6zDU4bwE52lw9MwOnC5ZL5esV+g9TlaHgyGVoquFeZmr7PddLkURx6WgRnE1jeLtbJQRIi7m+VIkjdK/225jL6fHK6ibIeLDCBrUHTkcvWLKvYvKL5nDzgmz0Maxe1ePVfeTWNv8p3KusAVQukqfXwlGb/AykJZKVbNBkb6OT808KoVREcLwchBr02yfwqz1Dq6pIGUKfa7x5DbyTWg3d2hIiwpy9UgKZzuKcsGeheHklhPVbu7xOWYoYMdXB+AMXTxNQKfoMoo864+lFSUqPjoYDWnVejCMNaq13mSvJ7e13jZs57FNhyPYMCBk/24xVzqVpsX86vHTV7CFGaUpqg0VhrTAFo6CqoAhDIQDNumqNlRkp6cGGMKUVr0Ntop6W1rCBCPRJfYcyKJhzIiCh7L9B7L8sCgz8eHAWDZ95ifQ0oG2Cm7v2fg/Yh8jlKSDXZEAAAAASUVORK5CYII=",
    va = ["id"],
    ga = $("img", {
        src: Vt,
        alt: "close"
    }, null, -1),
    fa = [ga],
    _a = O({
        __name: "CPopup",
        props: {
            elements: {
                type: Array
            }
        },
        setup(e) {
            const n = e,
                r = L("none"),
                o = L(!0),
                {
                    $bus: s
                } = ae(),
                t = A(() => l.value[0]),
                v = A(() => Te(t.value)),
                l = A(() => n.elements),
                m = A(() => {
                    var d;
                    return t.value ? (d = t.value.extra) == null ? void 0 : d.bgImage : ""
                }),
                y = A(() => {
                    var P, G, H, C, j;
                    if (!t.value) return;
                    const d = ((G = (P = t == null ? void 0 : t.value) == null ? void 0 : P.child) == null ? void 0 : G.length) > 0,
                        _ = ((j = (C = (H = m.value) == null ? void 0 : H.value) == null ? void 0 : C.url) == null ? void 0 : j.length) > 0;
                    return d || _
                }),
                I = A(() => {
                    var d, _, P;
                    return t.value ? (P = (_ = (d = t.value) == null ? void 0 : d.extra) == null ? void 0 : _.overlayColor) == null ? void 0 : P.value : "rgba(0, 0, 0, 0.5)"
                }),
                b = A(() => {
                    const {
                        extra: d
                    } = t.value;
                    return (d == null ? void 0 : d[ne == null ? void 0 : ne.HIDE_POPUP]).value
                });

            function B() {
                var d, _, P;
                (P = (_ = (d = t == null ? void 0 : t.value) == null ? void 0 : d.extra) == null ? void 0 : _.popupDisabled) != null && P.value || (r.value = "block", o.value = !1)
            }

            function c(d, _ = !1) {
                _ && !d && !o.value || (d && o.value && y.value ? B() : !d && !o.value && p())
            }

            function f() {
                if (!t.value) return;
                const {
                    extra: d
                } = t.value, _ = d == null ? void 0 : d[ne == null ? void 0 : ne.SHOW_POPUP_ON_MOUSEOUT];
                _ && !_.value || c(!0)
            }

            function p() {
                o.value = !0, s.$emit("closing-popup"), setTimeout(() => {
                    r.value = "none"
                }, 300)
            }
            return Q(() => {
                s.$on("open-popup", c), s.$on("show-popup-on-mouseout", f)
            }), Me(() => {
                s.$off("open-popup", c), s.$off("show-popup-on-mouseout", f)
            }), (d, _) => (i(), T("div", {
                id: "overlay",
                class: S([o.value ? "hide" : "show"]),
                style: pe({
                    display: r.value,
                    "background-color": a(I)
                }),
                onClick: _[1] || (_[1] = Qt(P => a(b) ? p() : null, ["self"]))
            }, [a(t) ? (i(), T("div", {
                key: 0,
                id: a(t).id,
                class: S(["popup-body", [o.value ? "hide" : "show", a(t).id, a(v)]])
            }, [z(Ht, {
                background: a(m)
            }, null, 8, ["background"]), $("div", {
                onClick: _[0] || (_[0] = P => p()),
                class: "closeLPModal"
            }, fa), z(je, {
                element: a(t),
                elements: a(l),
                popup: !0,
                class: "drop-zone-draggable"
            }, null, 8, ["element", "elements"])], 10, va)) : h("", !0)], 6))
        }
    });
const ya = () => Object.assign({
        id: "hl_main",
        child: []
    }),
    ha = () => {
        const e = ve(),
            n = Zt(),
            r = Jt(),
            {
                $bus: o
            } = ae();

        function s() {
            return window.location.search
        }

        function t(c) {
            !c || (c = c.replace("tel:", ""), window.location.href = "tel://" + c)
        }

        function v(c) {
            !c || (c = c.replace("sms:", ""), window.location.href = "sms://" + c)
        }

        function l(c) {
            !c || (c = c.replace("mailto:", ""), window.location.href = "mailto:" + c)
        }

        function m(c, f) {
            const p = `_mf_${c}`,
                d = JSON.stringify(f),
                _ = de(p, {
                    path: "/",
                    maxAge: 31536e3
                });
            _.value = d, un(p, d)
        }

        function y(c) {
            const {
                extra: f
            } = c;
            e.value.videoExistsInPage && o.$emit("handle-redirect"), f.action.value === "go-to-next-funnel-step" ? I() : f.action.value === "url" && b(f.visitWebsite.value)
        }

        function I(c, f = !1) {
            e.value.videoExistsInPage && o.$emit("handle-redirect");
            try {
                const p = n.path.split("/"),
                    d = e.value.funnelSteps || [],
                    _ = c ? Fe({
                        funnelSteps: d,
                        stepId: c
                    }) : Fe({
                        funnelSteps: d,
                        funnelNextStep: e.value.funnelNextStep
                    });
                let P = _.url;
                (p.includes("v2") || p.includes("preview")) && (P = _ ? `/v2/preview/${_.id}` : "");
                const G = e.value.funnelDomain;
                if (window.location.hostname !== "localhost" && !(p.includes("v2") || p.includes("preview")) && G !== window.location.hostname) {
                    const H = `https://${G}${P}` + s();
                    b({
                        url: H,
                        newTab: f
                    })
                } else {
                    if (f) {
                        const H = r.resolve({
                            path: P
                        });
                        window.open(H.href + s(), "_blank");
                        return
                    }
                    window.location.href = P + s();
                    return
                }
            } catch (p) {
                console.error(p)
            }
        }

        function b({
            url: c,
            newTab: f
        }) {
            e.value.videoExistsInPage && o.$emit("handle-redirect"), c = $t(c);
            let p = e.value.locationId;
            const d = cn(p);
            d && (c = dn(c, d)), f ? window.open(c, "_blank") : window.location.href = c
        }
        return {
            call: t,
            sms: v,
            mailTo: l,
            createMembershipToken: m,
            goToNextFunnelStep: I,
            openUrl: b,
            getNextFunnelStepURL: c => {
                try {
                    const f = n.path.split("/"),
                        p = e.value.funnelSteps || [],
                        d = n.query,
                        _ = Fe({
                            funnelSteps: p,
                            stepId: c
                        });
                    if (_ && !_.id) return "#";
                    if (f.includes("v2") || f.includes("preview")) return _ ? `/v2/preview/${_.id}` : "";
                    let P = _.url;
                    delete d.domain, delete d.page_url;
                    const G = e.value.funnelDomain,
                        H = new URL(P, `https://${G}`);
                    return Object.keys(d).forEach(C => {
                        H.searchParams.append(C, d[C])
                    }), mn({
                        url: H.href
                    })
                } catch (f) {
                    return console.error(f), "#"
                }
            },
            redirectOnSubmit: y
        }
    },
    Ea = ["href", "target"],
    Ia = ["href", "target"],
    Pt = O({
        __name: "NavMenuLink",
        props: {
            item: {
                type: Object
            }
        },
        emits: ["click"],
        setup(e, {
            emit: n
        }) {
            const {
                getNextFunnelStepURL: r
            } = ha(), {
                openPopup: o
            } = Bt();

            function s(m) {
                return m.goTo === J.GO_TO_URL
            }

            function t(m) {
                return m.goTo === J.GO_TO_STEP
            }

            function v(m) {
                switch (m.goTo) {
                    case J.OPEN_POPUP:
                        {
                            o();
                            break
                        }
                }
                l()
            }

            function l() {
                n("click")
            }
            return (m, y) => {
                var I;
                return s(e.item) ? (i(), T("a", {
                    key: 0,
                    href: a($t)(e.item.url),
                    target: e.item.openInNewTab ? "_blank" : "",
                    onClick: l
                }, Ve(e.item.title), 9, Ea)) : t(e.item) ? (i(), T("a", {
                    key: 1,
                    href: a(r)((I = e.item) == null ? void 0 : I.goToId),
                    target: e.item.openInNewTab ? "_blank" : ""
                }, Ve(e.item.title), 9, Ia)) : (i(), T("a", {
                    key: 2,
                    href: "javascript:void(0)",
                    onClick: y[0] || (y[0] = b => v(e.item))
                }, Ve(e.item.title), 1))
            }
        }
    }),
    Sa = {
        class: "nav-menu-body"
    },
    Ta = {
        class: "nav-menu"
    },
    wa = {
        class: "nav-menu-item-content"
    },
    Oa = {
        key: 0,
        class: "nav-menu-item-toggle"
    },
    ba = ["onClick"],
    Pa = {
        key: 0,
        class: "nav-dropdown-menu"
    },
    Ca = O({
        __name: "NavMenuPopup",
        props: {
            elements: {
                type: Array
            }
        },
        setup(e) {
            const n = e,
                r = L("none"),
                o = L(!0),
                s = L(null),
                t = L([]),
                v = ve(),
                {
                    $bus: l
                } = ae(),
                m = A(() => s.value ? n.elements.find(c => c.id === s.value) : null),
                y = A(() => {
                    if (!m.value) return [];
                    const {
                        extra: c
                    } = m.value, {
                        menuItems: f
                    } = c;
                    return f.value
                });
            A(() => v.value.funnelSteps), Q(() => {
                l.$on("show-nav-menu-popup", b)
            }), Me(() => {
                l.$off("show-nav-menu-popup", b)
            });

            function I(c) {
                if (!c || !c.childs || !c.childs.length) return;
                const {
                    id: f
                } = c, p = t.value.indexOf(f);
                p === -1 ? t.value = [...t.value, f] : t.value = [...t.value.slice(0, p), ...t.value.slice(p + 1)]
            }

            function b(c) {
                r.value = "block", s.value = c, setTimeout(() => {
                    o.value = !1
                }, 50)
            }

            function B() {
                r.value = "none", o.value = !0, s.value = null
            }
            return (c, f) => (i(), T("div", null, [$("div", {
                id: "nav-menu-popup",
                style: pe({
                    display: a(r)
                }),
                class: S([a(o) ? "hide" : "show", a(s)])
            }, [$("div", Sa, [$("i", {
                onClick: f[0] || (f[0] = p => B()),
                class: "close-menu fas fa-times"
            }), $("ul", Ta, [(i(!0), T(Ne, null, Ge(a(y), p => (i(), T("li", {
                key: p.id,
                class: S([{
                    dropdown: p.childs.length,
                    active: a(t).includes(p.id)
                }, "nav-menu-item"])
            }, [$("div", wa, [z(Pt, {
                onClick: d => p.childs.length ? I(p) : B(),
                item: p,
                class: "nav-menu-item-title"
            }, null, 8, ["onClick", "item"]), p.childs.length ? (i(), T("span", Oa, [$("i", {
                onClick: d => I(p),
                class: "fas fa-angle-down"
            }, null, 8, ba)])) : h("", !0)]), p.childs && p.childs.length ? (i(), T("ul", Pa, [(i(!0), T(Ne, null, Ge(p.childs, d => (i(), T("li", {
                key: d.id,
                class: "nav-menu-item"
            }, [z(Pt, {
                onClick: f[1] || (f[1] = _ => B()),
                item: d,
                class: "nav-menu-item-title"
            }, null, 8, ["item"])]))), 128))])) : h("", !0)], 2))), 128))])])], 6)]))
        }
    }),
    Ct = O({
        __name: "CustomHtmlCode",
        props: {
            code: {
                type: String,
                default: ""
            },
            id: {
                type: String,
                default: ""
            }
        },
        setup(e) {
            return (n, r) => (i(), T("div", null, [z(_n, {
                id: e.id,
                code: e.code
            }, null, 8, ["id", "code"])]))
        }
    }),
    Ke = "https://use.fontawesome.com/releases/v5.15.4/css",
    Lt = Ke + "/regular.css",
    kt = Ke + "/solid.css",
    xt = Ke + "/brands.css",
    At = "sha384-e7wK18mMVsIpE/BDLrCQ99c7gROAxr9czDzslePcAHgCLGCRidxq1mrNCLVF2oaj",
    Nt = "sha384-Tv5i09RULyHKMwX0E8wJUqSOaXlyu3SQxORObAI08iUwIalMmN5L6AvlPX2LMoSE",
    Rt = "sha384-S5yUroXKhsCryF2hYGm7i8RQ/ThL96qmmWD+lF5AZTdOdsxChQktVW+cKP/s4eav",
    La = {
        key: 0
    },
    ka = $("div", {
        id: "faq-overlay"
    }, null, -1),
    xa = {
        id: "faq-popup"
    },
    Aa = {
        class: "popupcontrols"
    },
    Na = $("img", {
        src: Vt,
        alt: "close"
    }, null, -1),
    Ra = [Na],
    Da = O({
        __name: "FAQPopup",
        setup(e) {
            const {
                $bus: n
            } = ae(), r = L(!1), o = L("");
            ve();
            const s = () => {
                    o.value = "", r.value = !1
                },
                t = v => {
                    o ? (o.value = v, r.value = !0) : s()
                };
            return Q(() => {
                n.$on("open-faq-popup", t)
            }), Me(() => {
                n.$off("open-faq-popup", t)
            }), (v, l) => a(r) ? (i(), T("div", La, [ka, $("div", xa, [$("div", Aa, [$("div", {
                onClick: l[0] || (l[0] = m => s()),
                class: "closeLPModal"
            }, Ra)]), z(zt, {
                class: "popupcontent",
                url: a(o),
                alt: "FAQ image"
            }, null, 8, ["url"])])])) : h("", !0)
        }
    });
const Ua = () => ({
        channel: "APP",
        source: "WEB_USER",
        version: "2021-04-15"
    }),
    Ma = e => {
        const n = Ut().public;
        return hn.create({
            baseURL: e || n.REST_API_URLS,
            headers: Ua()
        })
    },
    $a = {
        ValidateAffiliateCampaign: e => Ma()("/affiliate-manager/affiliate-campaign/validate", {
            body: e,
            method: "POST"
        })
    };

function za(e) {
    const n = e.split("/");
    return n.includes("v2") || n.includes("preview")
}
const Ba = O({
        __name: "index",
        async setup(e) {
            var Oe, be, Ye, Xe, Qe, Ze, Je, et, tt, nt, at, ot, lt, st, it, rt, ut, ct, dt, mt, pt, vt, gt, ft, _t, yt;
            let n, r;
            const {
                $bus: o
            } = ae();
            Ut();
            const s = en(),
                t = ve(),
                v = L(!1),
                {
                    data: l,
                    error: m
                } = ([n, r] = tn(async () => sn("pageData", async k => {
                    var D, K, M, V, w, g, F, U;
                    try {
                        let W = null;
                        const {
                            domain: Z,
                            page_url: te,
                            additional_route: ie,
                            step_id: re,
                            funnel_id: Pe,
                            version: _e,
                            am_id: ye,
                            email: Ce,
                            phone: Le,
                            contact_id: ke
                        } = s.query;
                        t.value.contactId = ke, t.value.email = Ce;
                        let Y = Le;
                        Y != null && Y.startsWith(" ") && (Y = "+" + Y.slice(1, Y.length)), t.value.phone = Y, t.value.domain = Z, t.value.pageUrl = te, t.value.affiliateId = ye;
                        const he = s.path.split("/");
                        let ht, xe, ue, X, Ee, Ie = !1;
                        if (za(s.path) && (W = he[he.length - 1], Ie = !0, s.path.includes("/b/"))) {
                            const q = s.path.split("/b/")[1],
                                St = s.path.split("/b/")[0].split("/");
                            t.value.blogSlug = q, W = St[St.length - 1]
                        }
                        if (!Ie && Object.keys(s.query).length === 0) throw Ae({
                            statusCode: 404,
                            statusMessage: "Page not found"
                        });
                        if (ue = void 0, ue) {
                            if (ue.href.includes("/b/")) {
                                const It = ue.href.split("/b/")[1];
                                t.value.blogSlug = It
                            }
                            if (X = ue.pathname, xe = ue.hostname, !xe || !X) throw Ae({
                                statusCode: 404,
                                statusMessage: "Sorry, we can't find the page you were looking for"
                            });
                            X = X.split("/b/")[0], Ee = X.length > 1 && X.endsWith("/") ? X.slice(0, -1) : X;
                            const q = X.split("/")[1];
                            Ee = q ? `/${q}` : "/"
                        }
                        const ce = {
                            additionalRoute: ie === "true",
                            stepId: re === "undefined" || re === void 0 ? "" : re,
                            funnelId: Pe,
                            ..._e && {
                                versionId: _e
                            }
                        };
                        if (Ie) ce.pageId = W;
                        else {
                            if (["/undefined"].includes(Ee)) throw Ae({
                                statusCode: 404,
                                statusMessage: "Sorry, we can't find the page you were looking for"
                            });
                            ce.domain = xe, ce.path = Ee
                        }
                        console.log(`Get Page Params:${JSON.stringify(ce)}`);
                        let u;
                        try {
                            u = (await vn.getPage(ce)).data
                        } catch (q) {
                            throw console.info(`failed to get data params:${JSON.stringify(ce)}`), Ae({
                                statusCode: ((D = q == null ? void 0 : q.response) == null ? void 0 : D.status) || 500,
                                statusMessage: `${((K=q==null?void 0:q.data)==null?void 0:K.msg)||""}`
                            })
                        }
                        if (u != null && u.redirect && !u.url) throw new Error("Url missing!");
                        u.pageMeta && (u.pageMeta.isPreviewUrl = Ie);
                        const Et = (V = (M = u == null ? void 0 : u.general) == null ? void 0 : M.general) == null ? void 0 : V.fontsToLoad;
                        Et && (ht = gn(Et));
                        const Ft = (g = (w = u == null ? void 0 : u.general) == null ? void 0 : w.general) == null ? void 0 : g.pageStyles;
                        (U = (F = u == null ? void 0 : u.general) == null ? void 0 : F.general) == null || delete U.pageStyles;
                        const Wt = ` 

 ` + u.pageStyles + `

` + Ft,
                            Be = u.sections,
                            He = [ya()];
                        Be && Be.length && (He.push(...Be), He[0].child = u.sectionsToMain);
                        let Se = u.popups;
                        if (Se = Array.isArray(Se) ? Se : [Se], t.value.funnelId = u.funnelId, t.value.funnelDomain = u.funnelDomain, t.value.stepId = u.stepId, t.value.locationId = u.locationId, t.value.locationCode = u.locationCode, t.value.funnelPageId = u.pageId, t.value.funnelNextStep = u.nextStep, t.value.funnelNextPageId = u.nextPageId, t.value.stripePublishableKey = u.stripePublishableKey, t.value.paypalPublishableKey = u.paypalPublishableKey, t.value.enablePaymentElement = u.enablePaymentElement, t.value.merchantLoginId = u.merchantLoginId, t.value.merchantPublicClientKey = u.merchantPublicClientKey, t.value.enablePaymentElement = u.enablePaymentElement, t.value.merchantAccountId = u.merchantAccountId, t.value.stripeAccountId = u.stripeAccountId, t.value.isLivePaymentMode = u.isLivePaymentMode, t.value.orderFormVersion = u.orderFormVersion, t.value.funnelName = u.funnelName, t.value.funnelSteps = u.funnelSteps, t.value.pageType = u.type, t.value.defaultPaymentProvider = u.defaultPaymentProvider, t.value.version = u.version || void 0, u.settings) {
                            const {
                                settings: q
                            } = u.settings;
                            q && (t.value.defaultSettings = q)
                        }
                        return {
                            elements: He,
                            popup: Se,
                            fontsToLoad: ht,
                            pStyle: Wt,
                            meta: u.pageMeta || {
                                title: "",
                                description: "",
                                author: "",
                                imageUrl: "",
                                isPreviewUrl: Ie
                            },
                            domainName: xe,
                            pageUrl: Ee,
                            pageId: u.pageId,
                            pageName: u.pageName,
                            locationId: u.locationId,
                            headerCode: u.headerCode,
                            footerCode: u.footerCode,
                            favicon: u.favicon || "https://stcdn.leadconnectorhq.com/funnel/icon/favicon.ico",
                            globalHeadTrackingCode: u.globalHeadTrackingCode,
                            globalBodyTrackingCode: u.globalBodyTrackingCode,
                            funnelId: u.funnelId,
                            funnelName: u.funnelName,
                            stepId: u.stepId,
                            affiliateId: ye
                        }
                    } catch (W) {
                        return console.info(`path: ${s.path} Error caught: ${W.message}`), {
                            error: W
                        }
                    }
                })), n = await n, r(), n),
                y = L();
            y.value = (be = (Oe = l.value) == null ? void 0 : Oe.meta) == null ? void 0 : be.title;
            const I = L([...Tt({
                    title: (Qe = (Xe = (Ye = l.value) == null ? void 0 : Ye.meta) == null ? void 0 : Xe.title) != null ? Qe : "",
                    description: (et = (Je = (Ze = l.value) == null ? void 0 : Ze.meta) == null ? void 0 : Je.description) != null ? et : "",
                    image: (nt = (tt = l.value) == null ? void 0 : tt.meta) != null && nt.imageUrl ? De((ot = (at = l.value) == null ? void 0 : at.meta) == null ? void 0 : ot.imageUrl) : "",
                    author: (it = (st = (lt = l.value) == null ? void 0 : lt.meta) == null ? void 0 : st.author) != null ? it : "",
                    keywords: (ct = (ut = (rt = l.value) == null ? void 0 : rt.meta) == null ? void 0 : ut.keywords) != null ? ct : "",
                    type: "website",
                    customMeta: ((mt = (dt = l.value) == null ? void 0 : dt.meta) == null ? void 0 : mt.customMeta) || [],
                    isPreviewUrl: (gt = (vt = (pt = l.value) == null ? void 0 : pt.meta) == null ? void 0 : vt.isPreviewUrl) != null ? gt : ""
                })]),
                b = k => {
                    var w, g, F, U, W, Z, te, ie, re, Pe, _e, ye, Ce, Le, ke, Y, he;
                    const {
                        title: D,
                        description: K,
                        image: M,
                        keywords: V
                    } = k;
                    y.value = D, I.value = Tt({
                        title: D || ((g = (w = l.value) == null ? void 0 : w.meta) == null ? void 0 : g.title),
                        description: K || ((U = (F = l.value) == null ? void 0 : F.meta) == null ? void 0 : U.description),
                        image: M || ((Z = (W = l.value) == null ? void 0 : W.meta) == null ? void 0 : Z.imageUrl) ? De(M || ((ie = (te = l.value) == null ? void 0 : te.meta) == null ? void 0 : ie.imageUrl)) : "",
                        author: (_e = (Pe = (re = l.value) == null ? void 0 : re.meta) == null ? void 0 : Pe.author) != null ? _e : {},
                        keywords: V || ((Ce = (ye = l.value) == null ? void 0 : ye.meta) == null ? void 0 : Ce.keywords),
                        type: "blog",
                        customMeta: ((ke = (Le = l.value) == null ? void 0 : Le.meta) == null ? void 0 : ke.customMeta) || [],
                        isPreviewUrl: (he = (Y = l.value) == null ? void 0 : Y.meta) == null ? void 0 : he.isPreviewUrl
                    })
                };
            o.$on("changeMeta", b), Dt({
                link: [{
                    rel: "preload",
                    as: "style",
                    href: (ft = l.value) == null ? void 0 : ft.fontsToLoad
                }, {
                    rel: "stylesheet",
                    href: (_t = l.value) == null ? void 0 : _t.fontsToLoad,
                    media: "print",
                    onload: "this.media='all'"
                }, {
                    rel: "preload",
                    as: "style",
                    integrity: At,
                    href: Lt,
                    crossorigin: "anonymous"
                }, {
                    rel: "preload",
                    as: "style",
                    integrity: Nt,
                    href: kt,
                    crossorigin: "anonymous"
                }, {
                    rel: "preload",
                    as: "style",
                    integrity: Rt,
                    href: xt,
                    crossorigin: "anonymous"
                }, {
                    rel: "stylesheet",
                    integrity: At,
                    href: Lt,
                    crossorigin: "anonymous"
                }, {
                    rel: "stylesheet",
                    integrity: Nt,
                    href: kt,
                    crossorigin: "anonymous"
                }, {
                    rel: "stylesheet",
                    integrity: Rt,
                    href: xt,
                    crossorigin: "anonymous"
                }, {
                    rel: "icon",
                    href: (yt = l.value) == null ? void 0 : yt.favicon
                }],
                title: y,
                meta: I,
                script: []
            }), l.value && l.value.error && nn(l.value.error);
            const B = L(),
                c = L(),
                f = L(),
                p = L();
            l.value && (B.value = l.value.globalHeadTrackingCode, c.value = l.value.globalBodyTrackingCode, f.value = l.value.headerCode, p.value = l.value.footerCode);
            const d = L(),
                _ = A(() => t.value.locationId),
                P = A(() => t.value.funnelId),
                G = A(() => t.value.funnelName),
                H = A(() => t.value.stepId),
                C = A(() => t.value.funnelPageId),
                j = L();
            ze(`${B.value} ${f.value}`);

            function ge(k) {
                k = k || window.event;
                const D = k.relatedTarget || k.toElement,
                    K = k.clientX,
                    M = k.clientY;
                (!D || D.nodeName === "HTML") && (K <= 0 || M <= 0) && (o.$emit("show-popup-on-mouseout"), document.removeEventListener("mouseout", le, !1))
            }

            function le(k) {
                ge(k)
            }

            function se() {
                const k = /Headless/.test(navigator.userAgent);
                C.value && !k && (yn(_.value, "funnel", C.value, j.value, void 0, void 0, {
                    funnel: {
                        name: G.value,
                        id: P.value,
                        stepId: H.value,
                        pageId: C.value
                    }
                }), window.attribution = {
                    locationId: _.value,
                    parentId: C.value,
                    parentName: j.value,
                    type: "funnel"
                })
            }

            function ze(k) {
                if (!k) return;
                const D = new DOMParser;
                k = k.replace(/<noscript\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/noscript>/gi, "");
                const K = D.parseFromString(k, "text/html"),
                    M = K.getElementsByTagName("head")[0].children;
                for (let V = 0; V < M.length; V++) {
                    const w = M[V];
                    if (w.localName === "script") {
                        const g = document.createElement("script");
                        w.type ? g.type = w.type : g.type = "text/javascript", w.innerHTML && (g.innerHTML = w.innerHTML), w.src && (g.src = w.src), w.async && (g.async = w.async), document.head.appendChild(g)
                    } else if (w.localName === "style") {
                        const g = document.createElement("style");
                        g.innerHTML = w.innerHTML, g.type = "text/css", document.head.appendChild(g)
                    } else if (w.localName === "link") {
                        const g = document.createElement("link");
                        g.rel = w.rel, g.type = w.type, g.title = w.title, g.href = w.href, document.head.appendChild(g)
                    } else if (w.localName === "meta") {
                        const g = document.createElement("meta");
                        g.name = w.name, g.content = w.content, document.head.appendChild(g)
                    }
                }
                d.value = K.getElementsByTagName("body")[0].innerHTML
            }
            const fe = L(),
                we = L(0);
            return Q(async () => {
                var M, V, w;
                v.value = !0, fe.value && new ResizeObserver(g => {
                    var F;
                    for (const U of g) {
                        const W = (F = U.borderBoxSize) == null ? void 0 : F[0].inlineSize;
                        typeof W == "number" && W !== we.value && (we.value = W, setTimeout(() => {
                            !t.value.blogSlug && !window.location.hash && window.scrollTo(0, 0)
                        }, 500))
                    }
                }).observe(fe.value), setTimeout(() => {
                    const g = "1024px",
                        F = window.matchMedia(`(max-width: ${g})`);
                    t.value.mobileDevice = F.matches, F.addListener(U => t.value.mobileDevice = U.matches)
                }, 3e3), await on(), (M = t.value) != null && M.locationId || (console.log("****************  Invalid state ****************"), console.log(t.value));
                const k = de("msgsndr_id", {
                    path: "/",
                    expires: wt().add(365, "days").toDate()
                });
                k.value || (k.value = ln());
                const D = s.query;
                if (D.marketplace) {
                    const g = de("_mp", {
                        path: "/",
                        expires: wt().add(365, "days").toDate()
                    });
                    g.value = D.marketplace
                }
                if (window.onpageshow = function(g) {
                        g.persisted && window.location.reload()
                    }, window.location.hash && setTimeout(function() {
                        var g = window.location.hash;
                        window.location.hash = "", window.location.hash = g
                    }, 300), document.addEventListener("mouseout", le, !1), !/Headless/.test(navigator.userAgent)) {
                    const {
                        data: g
                    } = pn({
                        domain: (V = l.value) == null ? void 0 : V.domainName,
                        pageUrl: (w = l.value) == null ? void 0 : w.pageUrl,
                        fingerprint: k.value,
                        eventType: "page_view"
                    }), F = an(g, U => {
                        k.value !== U.fingerprint && (k.value = U.fingerprint), F()
                    })
                }
                if (s.query.notrack || se(), D.am_id) try {
                    console.log("Tracking affiliate!");
                    let g = "";
                    g = window.location.href;
                    const F = {
                            locationId: t.value.locationId,
                            funnelId: t.value.funnelId,
                            amId: D.am_id,
                            fingerprint: de("am_fingerprint").value || "",
                            accessUrl: g
                        },
                        U = await $a.ValidateAffiliateCampaign(F);
                    if (U.valid && U.fingerprint && U.timestamp) {
                        const {
                            fingerprint: W,
                            timestamp: Z
                        } = U, te = de("am_fingerprint", {
                            expires: new Date(Z),
                            path: "/"
                        }), ie = de("am_id", {
                            expires: new Date(Z),
                            path: "/"
                        });
                        te.value = W, ie.value = D.am_id
                    }
                } catch {
                    console.log("Failed to add affiliate cookie!")
                }
            }), Me(() => {
                o.$off("changeMeta", b)
            }), (k, D) => {
                var M, V;
                const K = In;
                return a(l).error ? h("", !0) : (i(), T("div", {
                    key: 0,
                    style: pe({
                        visibility: a(v) ? "visible" : "hidden"
                    }),
                    ref_key: "index",
                    ref: fe
                }, [z(Da), z(Ca, {
                    elements: a(l).elements
                }, null, 8, ["elements"]), z(_a, {
                    elements: a(l).popup
                }, null, 8, ["elements"]), z(K, {
                    type: "text/css",
                    children: (M = a(l)) == null ? void 0 : M.pStyle
                }, null, 8, ["children"]), z(pa, {
                    elements: (V = a(l)) == null ? void 0 : V.elements,
                    class: "hl_page-preview--content"
                }, null, 8, ["elements"]), a(Ot)(a(c)) ? h("", !0) : (i(), E(Ct, {
                    key: 0,
                    id: "gb-track",
                    code: a(c)
                }, null, 8, ["code"])), a(Ot)(a(p)) ? h("", !0) : (i(), E(Ct, {
                    key: 1,
                    id: "ft-track",
                    code: a(p)
                }, null, 8, ["code"]))], 4))
            }
        }
    }),
    Za = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ba
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    ne as E, bn as I, J as S, kn as _, Bt as a, Pt as b, Za as c, za as i, Qa as t, ha as u
};