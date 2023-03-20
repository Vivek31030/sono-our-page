const c = (o, i) => {
        try {
            window.fbq && (window.fbq("init", o), t("track", i || "PageView"))
        } catch (r) {
            console.error(r)
        }
    },
    t = (o, i, r) => {
        if (i !== "None") try {
            window.fbq && (r ? window.fbq(o, i || "SubmitApplication", {}, {
                eventID: r
            }) : window.fbq(o, i || "SubmitApplication"))
        } catch (n) {
            console.error(n)
        }
    };
export {
    t as f, c as i
};