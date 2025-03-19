import { jsx as a, jsxs as g } from "react/jsx-runtime";
import { useState as y, useRef as D, useEffect as w, createElement as W } from "react";
function P(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var b = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var j;
function B() {
  return j || (j = 1, function(e) {
    (function() {
      var r = {}.hasOwnProperty;
      function t() {
        for (var n = "", s = 0; s < arguments.length; s++) {
          var d = arguments[s];
          d && (n = i(n, o(d)));
        }
        return n;
      }
      function o(n) {
        if (typeof n == "string" || typeof n == "number")
          return n;
        if (typeof n != "object")
          return "";
        if (Array.isArray(n))
          return t.apply(null, n);
        if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]"))
          return n.toString();
        var s = "";
        for (var d in n)
          r.call(n, d) && n[d] && (s = i(s, d));
        return s;
      }
      function i(n, s) {
        return s ? n ? n + " " + s : n + s : n;
      }
      e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
    })();
  }(b)), b.exports;
}
var F = B();
const l = /* @__PURE__ */ P(F), R = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3crect%20fill='%23e6e6e6'%20width='128'%20height='128'/%3e%3cpolyline%20fill='none'%20stroke='%23999'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='5px'%20points='28.98%2098.65%2035.04%2092.59%2099%2028.63'/%3e%3cpolyline%20fill='none'%20stroke='%23999'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='5px'%20points='35%2079.52%2035%2071.44%2035%2034.56%2079.74%2034.56'/%3e%3cpolyline%20fill='none'%20stroke='%23999'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='5px'%20points='56.78%2059.89%2051.67%2054.78%2035%2071.44'/%3e%3cpolyline%20fill='none'%20stroke='%23999'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='5px'%20points='35.04%2092.59%2093%2092.56%2093%2034.63'/%3e%3cpolyline%20fill='none'%20stroke='%23999'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='5px'%20points='62.26%2065.37%2072.33%2075.44%2080.07%2067.7%2093%2080.63'/%3e%3c/svg%3e", U = (e) => {
  e.currentTarget.src = R.toString();
}, $ = ({ src: e, alt: r, className: t, ...o }) => /* @__PURE__ */ a(
  "img",
  {
    className: l("", t),
    src: e,
    alt: r || e,
    onError: U,
    ...o
  }
), H = {
  xs: "size-8",
  sm: "size-9.5",
  md: "size-11",
  lg: "size-15.5",
  xl: "size-20"
}, le = ({ className: e, size: r = "md", ...t }) => /* @__PURE__ */ a($, { className: l("rounded-full", H[r], e), ...t });
function z(e) {
  var r, t, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (r = 0; r < i; r++) e[r] && (t = z(e[r])) && (o && (o += " "), o += t);
  } else for (t in e) e[t] && (o && (o += " "), o += t);
  return o;
}
function Z() {
  for (var e, r, t = 0, o = "", i = arguments.length; t < i; t++) (e = arguments[t]) && (r = z(e)) && (o && (o += " "), o += r);
  return o;
}
const S = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, L = Z, k = (e, r) => (t) => {
  var o;
  if ((r == null ? void 0 : r.variants) == null) return L(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: i, defaultVariants: n } = r, s = Object.keys(i).map((c) => {
    const h = t == null ? void 0 : t[c], f = n == null ? void 0 : n[c];
    if (h === null) return null;
    const x = S(h) || S(f);
    return i[c][x];
  }), d = t && Object.entries(t).reduce((c, h) => {
    let [f, x] = h;
    return x === void 0 || (c[f] = x), c;
  }, {}), u = r == null || (o = r.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, h) => {
    let { class: f, className: x, ...v } = h;
    return Object.entries(v).every((T) => {
      let [O, p] = T;
      return Array.isArray(p) ? p.includes({
        ...n,
        ...d
      }[O]) : {
        ...n,
        ...d
      }[O] === p;
    }) ? [
      ...c,
      f,
      x
    ] : c;
  }, []);
  return L(e, s, u, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, q = k(
  "py-3 px-6 m-0 inline-flex cursor-pointer items-center justify-center gap-x-2 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        ghost: "inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-primary-light hover:bg-primary-light/10 disabled:opacity-50 disabled:pointer-events-none dark:text-primary-dark dark:hover:bg-primary-dark/30",
        link: "text-light dark:text-dark hover:underline hover:text-primary-light dark:hover:text-primary-dark",
        outline: `py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 
					dark:text-neutral-400 hover:text-primary-light dark:hover:text-primary-dark dark:active:text-primary-light dark:focus:text-primary-light 
					dark:border-neutral-700 hover:border-primary-light dark:hover:border-primary-dark dark:focus:border-primary-dark
					focus:outline-hidden focus:border-primary-light focus:text-primary-light dark:focus:text-primary-light 
					active:text-primary-light 
					disabled:opacity-50 disabled:pointer-events-none`,
        solid: "rounded-lg border border-transparent bg-primary-light dark:bg-primary-dark text-sm font-medium !text-white hover:bg-primary-light/80 dark:hover:bg-primary-dark/80"
      }
    },
    defaultVariants: {
      variant: "solid"
    }
  }
), K = (e) => {
  const { className: r, text: t, children: o, variant: i, iconLeft: n, ...s } = e;
  return /* @__PURE__ */ g("button", { className: l(q({ variant: i }), r), ...s, children: [
    n,
    t || o
  ] });
}, m = ({ children: e, ...r }) => /* @__PURE__ */ a("div", { ...r, children: e }), _ = ({ className: e, children: r, ...t }) => /* @__PURE__ */ a(
  m,
  {
    className: l(
      "rounded-xl p-4 flex flex-col",
      "bg-card-bg-light dark:bg-card-bg-dark",
      "border border-card-border-light dark:border-card-border-dark",
      e
    ),
    ...t,
    children: r
  }
), de = ({ className: e }) => /* @__PURE__ */ a("hr", { className: l("border border-card-border-light dark:border-card-border-dark", e) }), A = (e) => {
  const [r, t] = y(!!e || !1);
  return {
    isOpen: r,
    onOpen: () => t(!0),
    onClose: () => t(!1),
    onToggle: () => t(!r)
  };
}, ce = (e) => {
  const r = D(null), t = e || r, [o, i] = y(!1), n = () => i(!0), s = () => i(!1), d = () => i(!o), u = (c) => {
    t != null && t.current && !(t != null && t.current.contains(c.target)) && s();
  };
  return w(() => (document.addEventListener("click", u, !0), () => {
    document.removeEventListener("click", u, !0);
  }), []), { ref: r, isOpen: o, onOpen: n, onClose: s, onToggle: d };
}, I = () => {
  const { innerWidth: e, innerHeight: r } = window, t = e < 576 ? "sm" : e < 768 ? "md" : e < 992 ? "lg" : "xl";
  return {
    width: e,
    height: r,
    size: t,
    isMobile: t === "sm"
  };
}, ue = () => {
  const [e, r] = y(I());
  w(() => (window.addEventListener("resize", t), () => window.removeEventListener("resize", t)), []);
  const t = () => r(I());
  return e;
}, G = k("text-text-light dark:text-text-dark m-0 p-0", {
  variants: {
    variant: {
      muted: "!text-muted-light dark:!text-muted-dark",
      primary: "!text-primary",
      error: "!text-error",
      success: "!text-success"
    }
  }
}), E = ({ className: e, text: r, variant: t, children: o, ...i }) => /* @__PURE__ */ a("span", { className: l(G({ variant: t }), e), ...i, children: r || o }), C = (e) => {
  const { value: r, onClick: t = () => {
  }, onClose: o = () => {
  }, icon: i, active: n, className: s } = e;
  return /* @__PURE__ */ g(
    "a",
    {
      onClick: () => {
        t(), o();
      },
      className: l(
        "flex cursor-pointer items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm",
        "hover:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300",
        "focus:bg-gray-100 focus:outline-none dark:focus:bg-neutral-700",
        n ? "text-primary-light dark:text-primary-dark" : "text-gray-800 dark:text-neutral-400",
        s
      ),
      onMouseDown: (u) => u.preventDefault(),
      children: [
        i || null,
        /* @__PURE__ */ a(E, { text: r, className: "truncate text-nowrap" })
      ]
    }
  );
}, J = ({ className: e, children: r, ...t }) => /* @__PURE__ */ a(m, { className: l("relative inline-flex", e), ...t, children: r }), Q = {
  "bottom right": "right-0",
  "bottom left": "left-0"
}, V = 100, N = (e) => {
  const { ref: r, isOpen: t, onClose: o, options: i, className: n, placement: s = "bottom left", children: d } = e, {
    isOpen: u,
    onOpen: c,
    onClose: h
  } = A(), f = () => {
    h(), setTimeout(() => o(), V);
  };
  return w(() => {
    t ? c() : u && f();
  }, [t, u]), /* @__PURE__ */ a(
    _,
    {
      ref: r,
      ...u ? { "data-active": !0 } : null,
      className: l(
        t ? "flex" : "hidden",
        "absolute z-100 flex-col space-y-0.5",
        `transition-all transition-discrete duration-${V}`,
        "opacity-0 data-active:opacity-100",
        "top-full mt-2 min-h-10 overflow-hidden",
        "min-w-full rounded-xl shadow-xl dark:shadow-neutral-900",
        i ? "!p-1" : "!p-0",
        Q[s],
        n
      ),
      children: i ? i.map((x, v) => /* @__PURE__ */ a(C, { ...x, onClose: f }, v)) : d || null
    }
  );
};
N.Wrap = J;
N.Item = C;
N.Option = C;
const me = ({ className: e, children: r, ...t }) => /* @__PURE__ */ a("form", { className: l("flex flex-col", e), ...t, children: r }), X = k("text-text-light dark:text-text-dark p-0 m-0", {
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
}), he = ({ level: e, className: r, text: t, children: o, ...i }) => W(
  `h${e}`,
  { className: l(X({ variant: `h${e}` }), r), ...i },
  t || o
), fe = ({ className: e, ...r }) => /* @__PURE__ */ a(m, { className: l("flex flex-row", e), ...r }), Y = "block w-full rounded-lg border border-[#e5e7eb] bg-neutral-100 px-4 py-3 text-sm placeholder:text-neutral-500 focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900", ee = "!border-red-500 focus:!border-red-500 dark:!border-red-500", M = ({ className: e, isInvalid: r, rightIcon: t, ...o }) => /* @__PURE__ */ g(m, { className: "relative w-full", children: [
  /* @__PURE__ */ a("input", { className: l(Y, r && ee, e), ...o }),
  t
] }), xe = ({ ref: e, text: r, children: t, ...o }) => {
  const i = D(null), n = e || i;
  return /* @__PURE__ */ g(m, { children: [
    t || /* @__PURE__ */ a(
      K,
      {
        type: "button",
        variant: "outline",
        onClick: () => (n == null ? void 0 : n.current) && n.current.click(),
        iconLeft: /* @__PURE__ */ a(te, {}),
        text: r || "Загрузить изображение"
      }
    ),
    /* @__PURE__ */ a(M, { ref: e || i, type: "file", className: "hidden", ...o })
  ] });
}, te = () => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-4 text-gray-600 dark:text-neutral-400",
    children: /* @__PURE__ */ a(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
      }
    )
  }
), ge = (e) => {
  const { isOpen: r, onToggle: t } = A();
  return /* @__PURE__ */ a(
    M,
    {
      placeholder: "Пароль",
      autoComplete: "current-password",
      type: r ? "text" : "password",
      rightIcon: /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          onClick: t,
          className: "absolute inset-y-0 end-0 z-20 flex cursor-pointer items-center rounded-e-md px-3 text-gray-400  focus:outline-none dark:text-neutral-600",
          children: r ? /* @__PURE__ */ a(re, {}) : /* @__PURE__ */ a(ne, {})
        }
      ),
      ...e
    }
  );
}, re = () => /* @__PURE__ */ g(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-4 text-gray-600 dark:text-neutral-400",
    children: [
      /* @__PURE__ */ a(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        }
      ),
      /* @__PURE__ */ a("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" })
    ]
  }
), ne = () => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-4 text-gray-600 dark:text-neutral-400",
    children: /* @__PURE__ */ a(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      }
    )
  }
), oe = k("w-10 animate-spin", {
  variants: {
    variant: {
      muted: "fill-gray-500",
      primary: "fill-primary"
    }
  },
  defaultVariants: {
    variant: "muted"
  }
}), ae = ({ variant: e, className: r, ...t }) => /* @__PURE__ */ a(
  "svg",
  {
    fill: "none",
    viewBox: "0 0 20 20",
    className: l(oe({ variant: e }), r),
    ...t,
    children: /* @__PURE__ */ a("path", { d: "M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z" })
  }
), ke = ({ className: e }) => /* @__PURE__ */ a(
  m,
  {
    className: l(
      "absolute flex h-full min-w-full items-center justify-center bg-neutral-200/50 dark:bg-neutral-500/50",
      e
    ),
    children: /* @__PURE__ */ a(ae, {})
  }
), ve = ({ className: e, children: r, ...t }) => /* @__PURE__ */ a("button", { className: l("inline-flex cursor-pointer", e), ...t, children: r }), pe = ({ className: e, ...r }) => /* @__PURE__ */ a(m, { className: l("flex flex-col", e), ...r }), be = (e) => /* @__PURE__ */ g(
  m,
  {
    className: l(
      "h-6 w-12",
      "relative flex cursor-pointer items-center overflow-hidden rounded-full",
      "transition-all duration-200",
      "bg-neutral-300 dark:bg-neutral-600",
      { "!bg-primary": e.value },
      e.className
    ),
    onClick: () => e.onChange(!e.value),
    children: [
      e != null && e.iconChecked ? /* @__PURE__ */ a(m, { className: "absolute left-2", children: e == null ? void 0 : e.iconChecked }) : null,
      e != null && e.iconUnChecked ? /* @__PURE__ */ a(m, { className: "absolute right-2", children: e == null ? void 0 : e.iconUnChecked }) : null,
      /* @__PURE__ */ a(
        E,
        {
          className: l(
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
  le as Avatar,
  K as Button,
  _ as Card,
  m as Div,
  de as Divider,
  N as Dropdown,
  xe as FIleInput,
  me as Form,
  fe as HStack,
  he as Heading,
  $ as Image,
  M as Input,
  ge as InputPassword,
  ke as Loader,
  ve as Pressable,
  E as Span,
  ae as Spinner,
  pe as Stack,
  be as Switch,
  l as cn,
  A as useDisclose,
  ce as useOutsideClick,
  ue as useWindowDimensions
};
