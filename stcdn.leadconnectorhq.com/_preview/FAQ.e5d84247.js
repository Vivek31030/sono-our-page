import {
    d as F,
    u as H,
    r as f,
    o as P,
    f as r,
    J as b,
    a as c,
    c as u,
    g as o,
    j as h,
    F as E,
    x as V,
    i as w,
    b as p,
    h as $,
    k as B,
    n as N,
    e as z,
    V as Q
} from "./entry.c9829b92.js";
import {
    m
} from "./helpers.3509abab.js";
import {
    I as R
} from "./HLConst.ac6e57fd.js";
import {
    _ as j
} from "./HtmlPreview.vue_vue_type_script_setup_true_lang.4a39ca08.js";
import "./index.6e35e14c.js";
import "./index.72547cc7.js";
import "./index.bb6f8f81.js";
const S = {
        class: "hl-faq"
    },
    D = ["onClick"],
    G = {
        class: "hl-faq-child-head"
    },
    J = {
        key: 0,
        class: "hl-faq-child-heading-icon left fa"
    },
    K = ["innerHTML"],
    U = {
        key: 0,
        class: "hl-faq-child-heading-icon right fa"
    },
    W = ["innerHTML"],
    oe = F({
        __name: "FAQ",
        props: {
            element: {
                type: Object,
                required: !0
            }
        },
        setup(L) {
            const l = L,
                {
                    $bus: k
                } = H(),
                d = f(!1),
                i = f([]),
                _ = f([]),
                q = f([]);
            (() => {
                const s = l.element.extra.faqCustomOptions.value.firstItemOpen;
                l.element.extra.faqList.value.map((n, e) => {
                    const a = {};
                    a.id = n.id, a.image = n.image, a.showImage = n.showImage, e === 0 && s ? a.active = !0 : a.active = !1, a.showImage && !d.value && (d.value = !0), a.heading = m(n.heading), a.text = m(n.text), i.value.push(a)
                })
            })(), P(() => {
                const s = l.element.extra.faqCustomOptions.value.firstItemOpen,
                    n = l.element.extra.faqList.value.map((e, a) => {
                        const t = {};
                        return t.id = e.id, t.image = e.image, t.showImage = e.showImage, a === 0 && s ? t.active = !0 : t.active = !1, t.showImage && !d.value && (d.value = !0), t.heading = m(e.heading), t.text = m(e.text), _.value[a].innerHTML = t.heading, q.value[a].innerHTML = t.text, t
                    });
                i.value = n
            });
            const A = s => {
                    k.$emit("open-faq-popup", s)
                },
                y = s => {
                    s.active = !s.active, x(s)
                },
                x = s => {
                    const n = i.value;
                    if (!g.value) {
                        const e = n.map(a => (a.id !== s.id && (a.active = !1), a));
                        i.value = e
                    }
                },
                O = () => {
                    const s = i.value,
                        e = !!(s.findIndex(t => !t.active) > -1),
                        a = s.map(t => (t.active = e, t));
                    i.value = a
                },
                v = r(() => l.element.extra.faqType.value),
                I = r(() => R),
                C = r(() => l.element.extra.faqCustomOptions.value.iconPosition),
                g = r(() => l.element.extra.faqCustomOptions.value.expandAll),
                T = r(() => l.element.extra.faqCustomOptions.value.expandAllToggle),
                M = r(() => l.element.extra.faqCustomOptions.value.showImagePopup);
            return b(() => g.value, s => {
                if (!s) {
                    const n = i.value[0];
                    n.active = !0, x(n)
                }
            }), (s, n) => (c(), u("div", S, [o(g) && o(T) ? (c(), u("button", {
                key: 0,
                class: "expand-collapse-all-button my-2",
                onClick: O
            }, " Expand/Collapse All ")) : h("", !0), (c(!0), u(E, null, V(o(i), (e, a) => (c(), u("div", {
                class: w(["hl-faq-child", {
                    active: e.active,
                    "faq-contained-child": o(v) === "contained",
                    "faq-simple-child": o(v) === "simple",
                    "faq-separated-child": o(v) === "separated"
                }]),
                key: a
            }, [p("div", {
                class: w(["hl-faq-child-heading", {
                    active: e.active
                }]),
                onClick: t => y(e)
            }, [p("div", G, [o(C) == "left" ? (c(), u("i", J)) : h("", !0), p("span", {
                ref_for: !0,
                ref: t => o(_)[a] = t,
                class: "hl-faq-child-heading-text",
                innerHTML: e.heading
            }, null, 8, K)]), o(C) == "right" ? (c(), u("i", U)) : h("", !0)], 10, D), $(Q, null, {
                default: B(() => [p("div", {
                    style: N({
                        height: e.active ? "auto" : "0",
                        padding: e.active ? void 0 : "0",
                        opacity: e.active ? "1" : "0"
                    }),
                    class: "hl-faq-child-panel"
                }, [p("span", {
                    ref_for: !0,
                    ref: t => o(q)[a] = t,
                    class: "hl-faq-child-item-text item-text",
                    innerHTML: e.text
                }, null, 8, W), e.showImage ? (c(), z(j, {
                    key: 0,
                    onClick: t => o(M) ? A(e.image ? e.image : o(I)) : void 0,
                    class: "item-img",
                    url: e.image ? e.image : o(I),
                    size: 320,
                    alt: "FAQ image"
                }, null, 8, ["onClick", "url"])) : h("", !0)], 4)]),
                _: 2
            }, 1024)], 2))), 128))]))
        }
    });
export {
    oe as
    default
};