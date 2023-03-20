import {
    d as f,
    r as h,
    o as w,
    c as d,
    E as x,
    f as q,
    g as i,
    b as o,
    i as $,
    a as m,
    m as v,
    j as y,
    F as k
} from "./entry.c9829b92.js";
const D = f({
        name: "ClientOnly",
        inheritAttrs: !1,
        props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
        setup(e, {
            slots: a,
            attrs: s
        }) {
            const n = h(!1);
            return w(() => {
                n.value = !0
            }), t => {
                var l;
                if (n.value) return (l = a.default) == null ? void 0 : l.call(a);
                const c = a.fallback || a.placeholder;
                if (c) return c();
                const u = t.fallback || t.placeholder || "",
                    r = t.fallbackTag || t.placeholderTag || "span";
                return d(r, s, u)
            }
        }
    }),
    L = ["src", "alt"],
    b = {
        key: 1,
        class: "hl-image-picture"
    },
    _ = ["srcset"],
    S = ["srcset"],
    T = ["srcset"],
    z = ["srcset"],
    A = ["srcset"],
    C = ["src", "alt", "height", "width"],
    E = ["src", "alt", "height", "width"],
    M = f({
        __name: "HLImage",
        props: {
            url: {
                type: String,
                required: !0
            },
            format: {
                type: String,
                default: "webp"
            },
            quality: {
                type: Number,
                default: 90
            },
            alt: {
                type: String
            },
            size: {
                type: Number
            },
            width: {
                type: String,
                required: !1,
                default: () => "auto"
            },
            height: {
                type: String,
                required: !1,
                default: () => "auto"
            },
            classList: {
                type: Array,
                required: !1,
                default: () => []
            }
        },
        emits: ["load"],
        setup(e, {
            emit: a
        }) {
            const s = e,
                n = x(),
                t = n.IMAGE_CDN,
                c = n.IMAGE_CDN_WHITELIST,
                u = q(() => {
                    try {
                        const r = new URL(s.url);
                        return c.includes(r.hostname)
                    } catch {
                        return console.warn("Invalid image url", s.url), !1
                    }
                });
            return (r, l) => e.size && i(u) ? (m(), d("img", {
                key: 0,
                src: `${i(t)}/img/f_${e.format}/q_${e.quality}/r_${e.size}/u_${e.url}`,
                alt: e.alt,
                class: "w-100 hl-optimized-fixed-size",
                onLoad: l[0] || (l[0] = g => a("load"))
            }, null, 40, L)) : !e.size && i(u) ? (m(), d("picture", b, [o("source", {
                media: "(max-width:900px) and (min-width: 768px)",
                srcset: `${i(t)}/img/f_${e.format}/q_${e.quality}/r_900/u_${e.url}`
            }, null, 8, _), o("source", {
                media: "(max-width:768px) and (min-width: 640px)",
                srcset: `${i(t)}/img/f_${e.format}/q_${e.quality}/r_768/u_${e.url}`
            }, null, 8, S), o("source", {
                media: "(max-width:640px) and (min-width: 480px)",
                srcset: `${i(t)}/img/f_${e.format}/q_100/r_640/u_${e.url}`
            }, null, 8, T), o("source", {
                media: "(max-width:480px) and (min-width: 320px)",
                srcset: `${i(t)}/img/f_${e.format}/q_100/r_480/u_${e.url}`
            }, null, 8, z), o("source", {
                media: "(max-width:320px)",
                srcset: `${i(t)}/img/f_${e.format}/q_100/r_320/u_${e.url}`
            }, null, 8, A), o("img", {
                src: `${i(t)}/img/f_${e.format}/q_${e.quality}/r_1200/u_${e.url}`,
                alt: e.alt,
                class: $(["hl-optimized", e.width ? e.classList : [...e.classList, "w-100"]]),
                height: e.height,
                width: e.width,
                onLoad: l[1] || (l[1] = g => a("load"))
            }, null, 42, C)])) : (m(), d("img", {
                key: 2,
                class: $(["hl-un-optimized", e.classList]),
                src: e.url,
                alt: e.alt,
                onLoad: l[2] || (l[2] = g => a("load")),
                height: e.height,
                width: e.width
            }, null, 42, E))
        }
    });
const I = ["innerHTML"],
    N = ["id"],
    R = f({
        __name: "HtmlPreview",
        props: {
            code: {
                type: String,
                default: ""
            },
            id: {
                type: String,
                required: !0
            }
        },
        setup(e) {
            var c;
            const a = e,
                s = new RegExp(/<s*(noscript)[^>]*>(.*?)<s*\/s*(noscript)>/g),
                n = h((c = a.code.replaceAll(`
`, " /**/ ").match(s)) == null ? void 0 : c.join("").replaceAll(" /**/ ", `
`)),
                t = h(a.code.replaceAll(`
`, " /**/ ").replace(s, "").replaceAll(" /**/ ", `
`));
            return w(async () => {
                if (t != null && t.value) {
                    const {
                        default: u
                    } = await v(() =>
                        import ("./postscribe.ea12d49e.js").then(r => r.p), ["./postscribe.ea12d49e.js", "./helpers.3509abab.js", "./entry.c9829b92.js", "./entry.45393610.css", "./index.6e35e14c.js", "./index.72547cc7.js", "./index.bb6f8f81.js"],
                        import.meta.url);
                    u(`#${a.id}-hl-custom-code`, t.value)
                }
            }), (u, r) => (m(), d(k, null, [i(n) ? (m(), d("div", {
                key: 0,
                innerHTML: i(n)
            }, null, 8, I)) : y("", !0), i(t) ? (m(), d("div", {
                key: 1,
                id: e.id + "-hl-custom-code"
            }, null, 8, N)) : y("", !0)], 64))
        }
    });
export {
    M as _, D as a, R as b
};