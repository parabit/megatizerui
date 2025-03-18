import { jsxs as x, jsx as l } from "react/jsx-runtime";
import { useState as y, useRef as z, useEffect as w, createElement as L } from "react";
function P(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var p = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var j;
function R() {
  return j || (j = 1, function(e) {
    (function() {
      var n = {}.hasOwnProperty;
      function t() {
        for (var a = "", i = 0; i < arguments.length; i++) {
          var d = arguments[i];
          d && (a = o(a, r(d)));
        }
        return a;
      }
      function r(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return t.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var i = "";
        for (var d in a)
          n.call(a, d) && a[d] && (i = o(i, d));
        return i;
      }
      function o(a, i) {
        return i ? a ? a + " " + i : a + i : a;
      }
      e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
    })();
  }(p)), p.exports;
}
var W = R();
const s = /* @__PURE__ */ P(W);
function I(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = I(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function M() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = I(e)) && (r && (r += " "), r += n);
  return r;
}
const S = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, D = M, v = (e, n) => (t) => {
  var r;
  if ((n == null ? void 0 : n.variants) == null) return D(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: o, defaultVariants: a } = n, i = Object.keys(o).map((c) => {
    const f = t == null ? void 0 : t[c], h = a == null ? void 0 : a[c];
    if (f === null) return null;
    const g = S(f) || S(h);
    return o[c][g];
  }), d = t && Object.entries(t).reduce((c, f) => {
    let [h, g] = f;
    return g === void 0 || (c[h] = g), c;
  }, {}), u = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, f) => {
    let { class: h, className: g, ...k } = f;
    return Object.entries(k).every((T) => {
      let [O, b] = T;
      return Array.isArray(b) ? b.includes({
        ...a,
        ...d
      }[O]) : {
        ...a,
        ...d
      }[O] === b;
    }) ? [
      ...c,
      h,
      g
    ] : c;
  }, []);
  return D(e, i, u, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, U = v(
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
), te = (e) => {
  const { className: n, text: t, children: r, variant: o, iconLeft: a, ...i } = e;
  return /* @__PURE__ */ x("button", { className: s(U({ variant: o }), n), ...i, children: [
    a,
    t || r
  ] });
}, m = ({ children: e, ...n }) => /* @__PURE__ */ l("div", { ...n, children: e }), $ = ({ className: e, children: n, ...t }) => /* @__PURE__ */ l(
  m,
  {
    className: s(
      "rounded-xl p-4 flex flex-col",
      "bg-card-bg-light dark:bg-card-bg-dark",
      "border !border-card-border-light dark:!border-card-border-dark",
      e
    ),
    ...t,
    children: n
  }
), ne = ({ className: e }) => /* @__PURE__ */ l("hr", { className: s("border-border-light dark:border-border-dark", e) }), B = (e) => {
  const [n, t] = y(!!e || !1);
  return {
    isOpen: n,
    onOpen: () => t(!0),
    onClose: () => t(!1),
    onToggle: () => t(!n)
  };
}, re = (e) => {
  const n = z(null), t = e || n, [r, o] = y(!1), a = () => o(!0), i = () => o(!1), d = () => o(!r), u = (c) => {
    t != null && t.current && !(t != null && t.current.contains(c.target)) && i();
  };
  return w(() => (document.addEventListener("click", u, !0), () => {
    document.removeEventListener("click", u, !0);
  }), []), { ref: n, isOpen: r, onOpen: a, onClose: i, onToggle: d };
}, V = () => {
  const { innerWidth: e, innerHeight: n } = window, t = e < 576 ? "sm" : e < 768 ? "md" : e < 992 ? "lg" : "xl";
  return {
    width: e,
    height: n,
    size: t,
    isMobile: t === "sm"
  };
}, ae = () => {
  const [e, n] = y(V());
  w(() => (window.addEventListener("resize", t), () => window.removeEventListener("resize", t)), []);
  const t = () => n(V());
  return e;
}, H = v("text-text-light dark:text-text-dark m-0 p-0", {
  variants: {
    variant: {
      muted: "text-muted-light dark:text-muted-dark",
      primary: "text-primary"
    }
  }
}), A = ({ className: e, text: n, variant: t, children: r, ...o }) => /* @__PURE__ */ l("span", { className: s(H({ variant: t }), e), ...o, children: n || r }), C = (e) => {
  const { value: n, onClick: t = () => {
  }, onClose: r = () => {
  }, icon: o, active: a, className: i } = e;
  return /* @__PURE__ */ x(
    "a",
    {
      onClick: () => {
        t(), r();
      },
      className: s(
        "flex cursor-pointer items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm",
        "hover:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300",
        "focus:bg-gray-100 focus:outline-none dark:focus:bg-neutral-700",
        a ? "text-primary-light dark:text-primary-dark" : "text-gray-800 dark:text-neutral-400",
        i
      ),
      onMouseDown: (u) => u.preventDefault(),
      children: [
        o || null,
        /* @__PURE__ */ l(A, { text: n, className: "truncate text-nowrap" })
      ]
    }
  );
}, q = ({ className: e, children: n, ...t }) => /* @__PURE__ */ l(m, { className: s("relative inline-flex", e), ...t, children: n }), F = {
  "bottom right": "right-0",
  "bottom left": "left-0"
}, E = 100, N = (e) => {
  const { ref: n, isOpen: t, onClose: r, options: o, className: a, placement: i = "bottom left", children: d } = e, {
    isOpen: u,
    onOpen: c,
    onClose: f
  } = B(), h = () => {
    f(), setTimeout(() => r(), E);
  };
  return w(() => {
    t ? c() : u && h();
  }, [t, u]), /* @__PURE__ */ l(
    $,
    {
      ref: n,
      ...u ? { "data-active": !0 } : null,
      className: s(
        t ? "flex" : "hidden",
        "absolute z-100 flex-col space-y-0.5",
        `transition-all transition-discrete duration-${E}`,
        "opacity-0 data-active:opacity-100",
        "top-full mt-2 min-h-10 overflow-hidden",
        "min-w-full rounded-xl shadow-xl dark:shadow-neutral-900",
        o ? "!p-1" : "!p-0",
        F[i],
        a
      ),
      children: o ? o.map((g, k) => /* @__PURE__ */ l(C, { ...g, onClose: h }, k)) : d || null
    }
  );
};
N.Wrap = q;
N.Item = C;
N.Option = C;
const K = v("text-text-light dark:text-text-dark p-0 m-0", {
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
}), oe = ({ level: e, className: n, text: t, children: r, ...o }) => L(
  `h${e}`,
  { className: s(K({ variant: `h${e}` }), n), ...o },
  t || r
), ie = ({ className: e, ...n }) => /* @__PURE__ */ l(m, { className: s("flex flex-row", e), ...n }), Z = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3crect%20fill='%23e6e6e6'%20width='128'%20height='128'/%3e%3cpolyline%20fill='none'%20stroke='%23999'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='5px'%20points='28.98%2098.65%2035.04%2092.59%2099%2028.63'/%3e%3cpolyline%20fill='none'%20stroke='%23999'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='5px'%20points='35%2079.52%2035%2071.44%2035%2034.56%2079.74%2034.56'/%3e%3cpolyline%20fill='none'%20stroke='%23999'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='5px'%20points='56.78%2059.89%2051.67%2054.78%2035%2071.44'/%3e%3cpolyline%20fill='none'%20stroke='%23999'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='5px'%20points='35.04%2092.59%2093%2092.56%2093%2034.63'/%3e%3cpolyline%20fill='none'%20stroke='%23999'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='5px'%20points='62.26%2065.37%2072.33%2075.44%2080.07%2067.7%2093%2080.63'/%3e%3c/svg%3e", _ = (e) => {
  e.currentTarget.src = Z.toString();
}, le = ({ src: e, alt: n, className: t, ...r }) => /* @__PURE__ */ l(
  "img",
  {
    className: s("", t),
    src: e,
    alt: n || e,
    onError: _,
    ...r
  }
), G = "block w-full rounded-lg border border-[#e5e7eb] bg-neutral-100 px-4 py-3 text-sm placeholder:text-neutral-500 focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900", J = "!border-red-500 focus:!border-red-500 dark:!border-red-500", se = ({ className: e, isInvalid: n, rightIcon: t, ...r }) => /* @__PURE__ */ x(m, { className: "relative w-full", children: [
  /* @__PURE__ */ l("input", { className: s(G, n && J, e), ...r }),
  t
] }), Q = v("w-10 animate-spin", {
  variants: {
    variant: {
      muted: "fill-gray-500",
      primary: "fill-primary"
    }
  },
  defaultVariants: {
    variant: "muted"
  }
}), X = ({ variant: e, className: n, ...t }) => /* @__PURE__ */ l(
  "svg",
  {
    fill: "none",
    viewBox: "0 0 20 20",
    className: s(Q({ variant: e }), n),
    ...t,
    children: /* @__PURE__ */ l("path", { d: "M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z" })
  }
), de = ({ className: e }) => /* @__PURE__ */ l(
  m,
  {
    className: s(
      "absolute flex h-full min-w-full items-center justify-center bg-neutral-200/50 dark:bg-neutral-500/50",
      e
    ),
    children: /* @__PURE__ */ l(X, {})
  }
), ce = ({ className: e, ...n }) => /* @__PURE__ */ l(m, { className: s("flex flex-col", e), ...n }), ue = (e) => /* @__PURE__ */ x(
  m,
  {
    className: s(
      "h-6 w-12",
      "relative flex cursor-pointer items-center overflow-hidden rounded-full",
      "transition-all duration-200",
      "bg-neutral-300 dark:bg-neutral-600",
      { "!bg-primary": e.value },
      e.className
    ),
    onClick: () => e.onChange(!e.value),
    children: [
      e != null && e.iconChecked ? /* @__PURE__ */ l(m, { className: "absolute left-2", children: e == null ? void 0 : e.iconChecked }) : null,
      e != null && e.iconUnChecked ? /* @__PURE__ */ l(m, { className: "absolute right-2", children: e == null ? void 0 : e.iconUnChecked }) : null,
      /* @__PURE__ */ l(
        A,
        {
          className: s(
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
);
export {
  te as Button,
  $ as Card,
  m as Div,
  ne as Divider,
  N as Dropdown,
  ie as HStack,
  oe as Heading,
  le as Image,
  se as Input,
  de as Loader,
  A as Span,
  X as Spinner,
  ce as Stack,
  ue as Switch,
  s as cn,
  B as useDisclose,
  re as useOutsideClick,
  ae as useWindowDimensions
};
