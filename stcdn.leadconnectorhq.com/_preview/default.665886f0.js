import {
    u as r
} from "./composables.b8b929aa.js";
import {
    d as u,
    S as c,
    r as d,
    o as i,
    f as m,
    c as f,
    b as _,
    i as g,
    g as p,
    a0 as v,
    a as b
} from "./entry.c9829b92.js";
import {
    u as S
} from "./index.bb6f8f81.js";
const I = u({
    __name: "default",
    setup(k) {
        const {
            locale: n
        } = c(), s = S();
        r({
            htmlAttrs: {
                lang: n
            }
        });
        const t = d();
        i(() => {
            var e, a;
            t.value = ((a = (e = s == null ? void 0 : s.value) == null ? void 0 : e.defaultSettings) == null ? void 0 : a.background) || {}
        });
        const l = m(() => {
            var e, a, o;
            return ((o = (a = (e = t.value) == null ? void 0 : e.bgImage) == null ? void 0 : a.value) == null ? void 0 : o.options) || "bgCover"
        });
        return (e, a) => (b(), f("div", null, [_("div", {
            class: g(["bg-fixed", p(l)])
        }, null, 2), v(e.$slots, "default")]))
    }
});
export {
    I as
    default
};