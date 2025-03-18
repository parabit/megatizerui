import { jsxs as y, jsx as s } from "react/jsx-runtime";
import { createElement as E, useState as k, useRef as A, useEffect as S } from "react";
function L(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var g = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var w;
function z() {
  return w || (w = 1, function(e) {
    (function() {
      var r = {}.hasOwnProperty;
      function t() {
        for (var n = "", l = 0; l < arguments.length; l++) {
          var c = arguments[l];
          c && (n = i(n, a(c)));
        }
        return n;
      }
      function a(n) {
        if (typeof n == "string" || typeof n == "number")
          return n;
        if (typeof n != "object")
          return "";
        if (Array.isArray(n))
          return t.apply(null, n);
        if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]"))
          return n.toString();
        var l = "";
        for (var c in n)
          r.call(n, c) && n[c] && (l = i(l, c));
        return l;
      }
      function i(n, l) {
        return l ? n ? n + " " + l : n + l : n;
      }
      e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
    })();
  }(g)), g.exports;
}
var I = z();
const d = /* @__PURE__ */ L(I);
function V(e) {
  var r, t, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (r = 0; r < i; r++) e[r] && (t = V(e[r])) && (a && (a += " "), a += t);
  } else for (t in e) e[t] && (a && (a += " "), a += t);
  return a;
}
function P() {
  for (var e, r, t = 0, a = "", i = arguments.length; t < i; t++) (e = arguments[t]) && (r = V(e)) && (a && (a += " "), a += r);
  return a;
}
const p = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, N = P, b = (e, r) => (t) => {
  var a;
  if ((r == null ? void 0 : r.variants) == null) return N(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: i, defaultVariants: n } = r, l = Object.keys(i).map((o) => {
    const m = t == null ? void 0 : t[o], h = n == null ? void 0 : n[o];
    if (m === null) return null;
    const f = p(m) || p(h);
    return i[o][f];
  }), c = t && Object.entries(t).reduce((o, m) => {
    let [h, f] = m;
    return f === void 0 || (o[h] = f), o;
  }, {}), v = r == null || (a = r.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((o, m) => {
    let { class: h, className: f, ...j } = m;
    return Object.entries(j).every((D) => {
      let [C, x] = D;
      return Array.isArray(x) ? x.includes({
        ...n,
        ...c
      }[C]) : {
        ...n,
        ...c
      }[C] === x;
    }) ? [
      ...o,
      h,
      f
    ] : o;
  }, []);
  return N(e, l, v, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, R = b(
  "py-3 px-6 m-0 inline-flex cursor-pointer items-center justify-center gap-x-2 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ghost: "inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-primary-light hover:bg-primary-light/10 disabled:opacity-50 disabled:pointer-events-none dark:text-primary-dark dark:hover:bg-primary-dark/30",
        link: "text-light dark:text-dark hover:underline hover:text-primary-light dark:hover:text-primary-dark",
        outline: "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-primary-light hover:text-primary-light focus:outline-hidden focus:border-primary-light focus:text-primary-light active:text-primary-light disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-primary-dark dark:hover:border-primary-dark dark:focus:text-primary-light dark:active:text-primary-light dark:focus:border-primary-dark",
        solid: "rounded-lg border border-transparent bg-primary-light dark:bg-primary-dark text-sm font-medium !text-white hover:bg-primary-light/80 dark:hover:bg-primary-dark/80"
      }
    },
    defaultVariants: {
      variant: "solid"
    }
  }
), K = (e) => {
  const { className: r, text: t, children: a, variant: i, iconLeft: n, ...l } = e;
  return /* @__PURE__ */ y("button", { className: d(R({ variant: i }), r), ...l, children: [
    n,
    t || a
  ] });
}, u = ({ children: e, ...r }) => /* @__PURE__ */ s("div", { ...r, children: e }), Z = ({ className: e, children: r, ...t }) => /* @__PURE__ */ s(
  u,
  {
    className: d(
      "rounded-xl p-4 flex flex-col",
      "bg-card-bg-light dark:bg-card-bg-dark",
      "border-border-light dark:border-border-dark border",
      e
    ),
    ...t,
    children: r
  }
), _ = ({ className: e }) => /* @__PURE__ */ s("hr", { className: d("border-border-light dark:border-border-dark", e) }), T = b("text-text-light dark:text-text-dark p-0 m-0", {
  variants: {
    variant: {
      h1: "text-4xl",
      h2: "text-3xl leading-10",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-base"
    }
  }
}), G = ({ level: e, className: r, text: t, children: a, ...i }) => E(
  `h${e}`,
  { className: d(T({ variant: `h${e}` }), r), ...i },
  t || a
), J = ({ className: e, ...r }) => /* @__PURE__ */ s(u, { className: d("flex flex-row", e), ...r }), H = "block w-full rounded-lg border border-[#e5e7eb] bg-neutral-100 px-4 py-3 text-sm placeholder:text-neutral-500 focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900", M = "!border-red-500 focus:!border-red-500 dark:!border-red-500", Q = ({ className: e, isInvalid: r, rightIcon: t, ...a }) => /* @__PURE__ */ y(u, { className: "relative w-full", children: [
  /* @__PURE__ */ s("input", { className: d(H, r && M, e), ...a }),
  t
] }), U = b("w-10 animate-spin", {
  variants: {
    variant: {
      muted: "fill-gray-500",
      primary: "fill-primary"
    }
  },
  defaultVariants: {
    variant: "muted"
  }
}), W = ({ variant: e, className: r, ...t }) => /* @__PURE__ */ s(
  "svg",
  {
    fill: "none",
    viewBox: "0 0 20 20",
    className: d(U({ variant: e }), r),
    ...t,
    children: /* @__PURE__ */ s("path", { d: "M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z" })
  }
), X = ({ className: e }) => /* @__PURE__ */ s(
  u,
  {
    className: d(
      "absolute flex h-full min-w-full items-center justify-center bg-neutral-200/50 dark:bg-neutral-500/50",
      e
    ),
    children: /* @__PURE__ */ s(W, {})
  }
), $ = b("text-text-light dark:text-text-dark m-0 p-0", {
  variants: {
    variant: {
      muted: "text-muted-light dark:text-muted-dark",
      primary: "text-primary"
    }
  }
}), q = ({ className: e, text: r, variant: t, children: a, ...i }) => /* @__PURE__ */ s("span", { className: d($({ variant: t }), e), ...i, children: r || a }), Y = ({ className: e, ...r }) => /* @__PURE__ */ s(u, { className: d("flex flex-col", e), ...r }), ee = (e) => /* @__PURE__ */ y(
  u,
  {
    className: d(
      "h-6 w-12",
      "relative flex cursor-pointer items-center overflow-hidden rounded-full",
      "transition-all duration-200",
      "bg-neutral-300 dark:bg-neutral-600",
      { "!bg-primary": e.value },
      e.className
    ),
    onClick: () => e.onChange(!e.value),
    children: [
      e != null && e.iconChecked ? /* @__PURE__ */ s(u, { className: "absolute left-2", children: e == null ? void 0 : e.iconChecked }) : null,
      e != null && e.iconUnChecked ? /* @__PURE__ */ s(u, { className: "absolute right-2", children: e == null ? void 0 : e.iconUnChecked }) : null,
      /* @__PURE__ */ s(
        q,
        {
          className: d(
            "h-6 w-6",
            "z-1 flex rounded-full",
            "shadow-lg shadow-black/50",
            "transition-all duration-200",
            "border border-neutral-300 dark:border-neutral-600",
            "bg-white dark:bg-white",
            { "!ml-6 !border-primary": e.value }
          )
        }
      )
    ]
  }
), te = (e) => {
  const [r, t] = k(!!e || !1);
  return {
    isOpen: r,
    onOpen: () => t(!0),
    onClose: () => t(!1),
    onToggle: () => t(!r)
  };
}, re = (e) => {
  const r = A(null), t = e || r, [a, i] = k(!1), n = () => i(!0), l = () => i(!1), c = () => i(!a), v = (o) => {
    t != null && t.current && !(t != null && t.current.contains(o.target)) && l();
  };
  return S(() => (document.addEventListener("click", v, !0), () => {
    document.removeEventListener("click", v, !0);
  }), []), { ref: r, isOpen: a, onOpen: n, onClose: l, onToggle: c };
}, O = () => {
  const { innerWidth: e, innerHeight: r } = window, t = e < 576 ? "sm" : e < 768 ? "md" : e < 992 ? "lg" : "xl";
  return {
    width: e,
    height: r,
    size: t,
    isMobile: t === "sm"
  };
}, ne = () => {
  const [e, r] = k(O());
  S(() => (window.addEventListener("resize", t), () => window.removeEventListener("resize", t)), []);
  const t = () => r(O());
  return e;
};
export {
  K as Button,
  Z as Card,
  u as Div,
  _ as Divider,
  J as HStack,
  G as Heading,
  Q as Input,
  X as Loader,
  q as Span,
  W as Spinner,
  Y as Stack,
  ee as Switch,
  d as cn,
  te as useDisclose,
  re as useOutsideClick,
  ne as useWindowDimensions
};
