import { jsxs as y, jsx as s } from "react/jsx-runtime";
import { createElement as E, useState as x, useRef as A, useEffect as S } from "react";
function z(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var g = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var w;
function L() {
  return w || (w = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var n = "", o = 0; o < arguments.length; o++) {
          var l = arguments[o];
          l && (n = i(n, a(l)));
        }
        return n;
      }
      function a(n) {
        if (typeof n == "string" || typeof n == "number")
          return n;
        if (typeof n != "object")
          return "";
        if (Array.isArray(n))
          return r.apply(null, n);
        if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]"))
          return n.toString();
        var o = "";
        for (var l in n)
          t.call(n, l) && n[l] && (o = i(o, l));
        return o;
      }
      function i(n, o) {
        return o ? n ? n + " " + o : n + o : n;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(g)), g.exports;
}
var I = L();
const u = /* @__PURE__ */ z(I);
function V(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = V(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function P() {
  for (var e, t, r = 0, a = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = V(e)) && (a && (a += " "), a += t);
  return a;
}
const N = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, C = P, k = (e, t) => (r) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null) return C(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: i, defaultVariants: n } = t, o = Object.keys(i).map((d) => {
    const m = r == null ? void 0 : r[d], f = n == null ? void 0 : n[d];
    if (m === null) return null;
    const h = N(m) || N(f);
    return i[d][h];
  }), l = r && Object.entries(r).reduce((d, m) => {
    let [f, h] = m;
    return h === void 0 || (d[f] = h), d;
  }, {}), b = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((d, m) => {
    let { class: f, className: h, ...j } = m;
    return Object.entries(j).every((D) => {
      let [p, v] = D;
      return Array.isArray(v) ? v.includes({
        ...n,
        ...l
      }[p]) : {
        ...n,
        ...l
      }[p] === v;
    }) ? [
      ...d,
      f,
      h
    ] : d;
  }, []);
  return C(e, o, b, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, R = k(
  "py-3 px-6 m-0 inline-flex cursor-pointer items-center justify-center gap-x-2 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ghost: "inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-primary-light hover:bg-primary-light/10 disabled:opacity-50 disabled:pointer-events-none dark:text-primary-dark dark:hover:bg-primary-dark/30",
        link: "text-light dark:text-dark hover:underline hover:text-primary-light dark:hover:text-primary-dark",
        outline: "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-primary-light hover:text-primary-light focus:outline-hidden focus:border-primary-light focus:text-primary-light active:text-primary-light disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-primary-dark dark:hover:border-primary-dark dark:focus:text-primary-light dark:active:text-primary-light dark:focus:border-primary-dark",
        solid: "rounded-lg border border-transparent bg-primary-light dark:bg-primary-dark text-sm font-medium text-white hover:bg-primary-light/60 dark:hover:bg-primary-dark/60"
      }
    },
    defaultVariants: {
      variant: "solid"
    }
  }
), B = (e) => {
  const { className: t, text: r, children: a, variant: i, iconLeft: n, ...o } = e;
  return /* @__PURE__ */ y("button", { className: u(R({ variant: i }), t), ...o, children: [
    n,
    r || a
  ] });
}, c = ({ children: e, ...t }) => /* @__PURE__ */ s("div", { ...t, children: e }), F = ({ className: e, children: t, ...r }) => /* @__PURE__ */ s(
  c,
  {
    className: u(
      "rounded-xl p-4 flex flex-col",
      "bg-card-bg-light dark:bg-card-bg-dark",
      "border-border-light dark:border-border-dark border",
      e
    ),
    ...r,
    children: t
  }
), K = ({ className: e }) => /* @__PURE__ */ s("hr", { className: u("border-border-light dark:border-border-dark", e) }), T = k(
  "py-3 px-6 m-0 inline-flex cursor-pointer items-center justify-center gap-x-2 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ghost: "inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-primary-light hover:bg-primary-light/10 disabled:opacity-50 disabled:pointer-events-none dark:text-primary-dark dark:hover:bg-primary-dark/30",
        link: "text-light dark:text-dark hover:underline hover:text-primary-light dark:hover:text-primary-dark",
        outline: "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-primary-light hover:text-primary-light focus:outline-hidden focus:border-primary-light focus:text-primary-light active:text-primary-light disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-primary-dark dark:hover:border-primary-dark dark:focus:text-primary-light dark:active:text-primary-light dark:focus:border-primary-dark",
        solid: "rounded-lg border border-transparent bg-primary-light dark:bg-primary-dark text-sm font-medium text-white hover:bg-primary-light/60 dark:hover:bg-primary-dark/60"
      }
    },
    defaultVariants: {
      variant: "solid"
    }
  }
), _ = ({ level: e, className: t, variant: r, text: a, children: i, ...n }) => E(
  `h${e}`,
  { className: u(T({ variant: r }), t), ...n },
  a || i
), G = ({ className: e, ...t }) => /* @__PURE__ */ s(c, { className: u("flex flex-row", e), ...t }), H = "block w-full rounded-lg border border-[#e5e7eb] bg-neutral-100 px-4 py-3 text-sm placeholder:text-neutral-500 focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900", U = "!border-red-500 focus:!border-red-500 dark:!border-red-500", J = ({ className: e, isInvalid: t, rightIcon: r, ...a }) => /* @__PURE__ */ y(c, { className: "relative w-full", children: [
  /* @__PURE__ */ s("input", { className: u(H, t && U, e), ...a }),
  r
] }), W = k("text-text-light dark:text-text-dark m-0 p-0", {
  variants: {
    variant: {
      muted: "text-muted-light dark:text-muted-dark",
      primary: "text-primary"
    }
  }
}), q = ({ className: e, text: t, variant: r, children: a, ...i }) => /* @__PURE__ */ s("span", { className: u(W({ variant: r }), e), ...i, children: t || a }), Q = ({ className: e, ...t }) => /* @__PURE__ */ s(c, { className: u("flex flex-col", e), ...t }), X = (e) => /* @__PURE__ */ y(
  c,
  {
    className: u(
      "h-6 w-12",
      "relative flex cursor-pointer items-center overflow-hidden rounded-full",
      "transition-all duration-200",
      "bg-neutral-300 dark:bg-neutral-600",
      { "!bg-primary": e.value },
      e.className
    ),
    onClick: () => e.onChange(!e.value),
    children: [
      e != null && e.iconChecked ? /* @__PURE__ */ s(c, { className: "absolute left-2", children: e == null ? void 0 : e.iconChecked }) : null,
      e != null && e.iconUnChecked ? /* @__PURE__ */ s(c, { className: "absolute right-2", children: e == null ? void 0 : e.iconUnChecked }) : null,
      /* @__PURE__ */ s(
        q,
        {
          className: u(
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
), Y = (e) => {
  const [t, r] = x(!!e || !1);
  return {
    isOpen: t,
    onOpen: () => r(!0),
    onClose: () => r(!1),
    onToggle: () => r(!t)
  };
}, Z = (e) => {
  const t = A(null), r = e || t, [a, i] = x(!1), n = () => i(!0), o = () => i(!1), l = () => i(!a), b = (d) => {
    r != null && r.current && !(r != null && r.current.contains(d.target)) && o();
  };
  return S(() => (document.addEventListener("click", b, !0), () => {
    document.removeEventListener("click", b, !0);
  }), []), { ref: t, isOpen: a, onOpen: n, onClose: o, onToggle: l };
}, O = () => {
  const { innerWidth: e, innerHeight: t } = window, r = e < 576 ? "sm" : e < 768 ? "md" : e < 992 ? "lg" : "xl";
  return {
    width: e,
    height: t,
    size: r,
    isMobile: r === "sm"
  };
}, ee = () => {
  const [e, t] = x(O());
  S(() => (window.addEventListener("resize", r), () => window.removeEventListener("resize", r)), []);
  const r = () => t(O());
  return e;
};
export {
  B as Button,
  F as Card,
  c as Div,
  K as Divider,
  G as HStack,
  _ as Heading,
  J as Input,
  q as Span,
  Q as Stack,
  X as Switch,
  u as cn,
  Y as useDisclose,
  Z as useOutsideClick,
  ee as useWindowDimensions
};
