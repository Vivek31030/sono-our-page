import "./entry.c9829b92.js";
import {
    u,
    v as w
} from "./index.6e35e14c.js";
const l = e => {
        var t;
        (t = window.userSessionAttribution) == null || t.update(e)
    },
    S = (e, t) => {
        var s;
        return ((s = window.userSessionAttribution) == null ? void 0 : s.pageVisitData(e, t, {
            gaClientId: u("_ga").value
        })) || {}
    },
    p = async (e, t, s, n, r, i, a) => {
        var o;
        try {
            await ((o = window.userSessionAttribution) == null ? void 0 : o.create(e, t, s, n, r, i, a))
        } catch (c) {
            console.log(c)
        }
    },
    b = e => {
        var t;
        try {
            return (t = window.userSessionAttribution) == null ? void 0 : t.getSessionId(e)
        } catch (s) {
            console.log(s)
        }
    },
    v = e => {
        var t;
        try {
            return (t = window.userSessionAttribution) == null ? void 0 : t.getUserFingerprint(e)
        } catch (s) {
            console.log(s)
        }
    },
    y = (e, t) => {
        var s;
        try {
            return (s = window.userSessionAttribution) == null ? void 0 : s.setUserFingerprint(e, t)
        } catch (n) {
            console.log(n)
        }
    },
    A = () => {
        try {
            return window.self !== window.top
        } catch {
            return !1
        }
    },
    h = () => w();
export {
    h as a, S as b, p as c, v as d, y as e, b as g, A as i, l as s
};